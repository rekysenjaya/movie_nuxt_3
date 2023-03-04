export default fakeBackend

function fakeBackend() {
	const userlist = () => JSON.parse(localStorage.getItem('users') || "[]");
	let realFetch = window.fetch;
	window.fetch = function (url, opts) {
		console.log(opts, '----');
		return new Promise((resolve, reject) => {
			setTimeout(handleRoute, 500);

			function handleRoute() {
				switch (true) {
					case url.endsWith('/login') && opts.method === 'POST':
						return login();
					case url.endsWith('/signup') && opts.method === 'POST':
						return signup();
					case url.endsWith('/forgot-password') && opts.method === 'POST':
						return checkUsername();
					case url.endsWith('/change-password') && opts.method === 'POST':
						return changePassword();
					case url.includes('/profile') && opts.method === 'GET':
						return getProfile();
					default:
						return realFetch(url, opts)
							.then(response => resolve(response))
							.catch(error => reject(error));
				}
			}

			function login() {
				const users = userlist()
				const { username, password } = body();

				const user = users.find(x => x.username === username && x.password === password);
				if (!user) return error('Username or password is incorrect');

				return ok({
					id: user.id,
					username: user.username,
					token: `fake-jwt-token-${user.username}`
				});
			}

			function signup() {
				const users = userlist()
				const { username, password, repassword } = body();

				if (password !== repassword) {
					return error(`Password not same!`);
				}

				const user = users.find(x => x.username === username);
				if (user) return error(`Username ${username} already registered`);

				const data = {
					id: Date.now(),
					username,
					password,
					token: `fake-jwt-token-${username}`
				}
				users.push(data)
				localStorage.setItem('users', JSON.stringify(users))

				return ok({ message: 'Success' });
			}

			function checkUsername() {
				const users = userlist()
				const { username } = body();

				const user = users.find(x => x.username === username);
				if (!user) return error(`Username ${username} not found`);

				return ok({ message: 'ready' })
			}

			function changePassword() {
				const users = userlist()
				let { username, passwordOld, passwordNew } = body();

				const userAuth = isAuthenticated()
				if (userAuth?.username) {
					username = userAuth.username
				}

				console.log(userAuth, '---user', username, '--', userAuth?.username, passwordOld);

				const user = users.find(x => x.username === username && x.password === passwordOld);
				if (!user) return error(`Username and Old Password not found`);

				const newList = users.map(x => {
					if (x.username === username && x.password === passwordOld) {
						x.username = username
						x.password = passwordNew
					}
					return x
				});
				localStorage.setItem('users', JSON.stringify(newList))

				return ok({ message: 'ready' })
			}

			function getProfile() {
				const user = isAuthenticated()
				if (!user?.id) return unauthorized();

				return ok(user);
			}

			function ok(body) {
				resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
			}

			function unauthorized() {
				resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) })
			}

			function error(message) {
				resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
			}

			function isAuthenticated() {
				const auth = `${opts.headers['Authorization'] || ''}`.split(' ')
				const users = userlist()
				const user = users.find(x => x.token === auth[1]);
				return user
			}

			function body() {
				return opts.body && JSON.parse(opts.body);
			}
		});
	}
}
