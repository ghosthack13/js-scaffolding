
## Quick Start

To initialize a fresh MySQL container remove all files/databases from the MySQL data directory.
 
```shell script
sudo rm -rf mysql-data/*
```

Start MySQL container in **detached** mode:
```shell script
sudo docker-compose up -d database
```

Start App
```shell script
sudo docker-compose run --rm --service-ports app bash
```

Connect to running container
```shell script
sudo docker exec -it <container-name/container-id> bash
```

Start Webpack Dev Server

In Webpack 4 Use:
```shell script
npx webpack dev-server
```

In Webpack 5 Use:
```shell script
npx webpack serve
```

### GOTCHAS

In Webpack 5, you have to explicitly accept a module in order for it to *hot reload*
E.g.
```javascript
//Let module accept itself
if (module.hot) {
	module.hot.accept(() => {/* Error Handling Code*/});
}
```

Ensure that nodemon is **NOT** watching webpack's /dist folder else a restart will trigger on every build, then that 
rebuild will trigger HotMiddleware rebuild which will again trigger a nodemon rebuild and create and *inifinite* cycle.
