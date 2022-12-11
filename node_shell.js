const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'7e918e5f-cb6b-4ce1-8685-846de083391e'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
