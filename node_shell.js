const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'1f475f5a-0ddf-4e17-a9b1-a5af681d34a2'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
