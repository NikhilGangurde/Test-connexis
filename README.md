# `Test-connexis` — the connexis test application
      This app is made for connexis machine test.

## Getting Started

To get you started you can simply clone the `Test-connexis` repository and install the dependencies:

### Prerequisites

You need git to clone the `Test-connexis` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `Test-connexis`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `Test-connexis`

Clone the `Test-connexis` repository using git:

```
git clone https://github.com/angular/Test-connexis.git
cd Test-connexis
```

If you just want to start a new project without the `Test-connexis` commit history then you can do:

```
git clone --depth=1 https://github.com/angular/Test-connexis.git <your-project-name>
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code. The tools
help us manage and test the application.

* We get the tools we depend upon and the AngularJS code via `npm`, the [Node package manager][npm].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically copy the downloaded AngularJS files to `app/lib` so we
can simply do:

```
npm install
```

Behind the scenes this will also call `npm run copy-libs`, which copies the AngularJS files and
other front end dependencies. After that, you should find out that you have two new directories in
your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/lib` - contains the AngularJS framework files and other front end dependencies

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Updating AngularJS and other dependencies

Since the AngularJS framework library code and tools are acquired through package managers (e.g.
npm) you can use these tools to easily update the dependencies. Simply run the preconfigured script:

```
npm run update-deps
```

This will call `npm update` and `npm run copy-libs`, which in turn will find and install the latest
versions that match the version ranges specified in the `package.json` file.

If you want to update a dependency to a version newer than what the specificed range would permit,
you can change the version range in `package.json` and then run `npm run update-deps` as usual.


### Running the App during Development

The `Test-connexis` project comes preconfigured with a local development web server. It is a Node.js
tool called [http-server][http-server]. You can start this web server with `npm start`, but you may
choose to install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from any folder by running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own web server, such as Apache or Nginx. Just
configure your server to serve the files under the `app/` directory.

