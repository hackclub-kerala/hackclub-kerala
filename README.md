# Hack club Kerala

This is the repo for developing hack club kerala.

## Design

[hack club kerala design using figma](https://www.figma.com/file/FsDf9c5ePD6kB78tdvAW7U/HC-Kerala-Design-Team?node-id=0%3A1)

## Main package and tools to develop

* React JS
* tailwindcss

## Code design

```If you want to contribute to this repo then make a pull request to your 'Dev' branch. Please be specific on what is your PR means.```

We use our own customized DDD structure for this work flow.

## File Structure

All the file are the files are in src.

* The root dir only contain the config and normal file with react JS.

src/config  : contain config file <br />
src/error : contain error handler file <br />
src/routes : contain route handling files <br />
src/services :contain services files <br />
src/shared :contain file for shared usage to all repo <br />
src/components: contain components to be used any module <br />

This dir mention above are  shared folder. Which can be used to any modules we want. <br />

src/repositories : contain file to which have modules like home and auth. <br />

src/repositories/***module name***/components : this is more like application layer where all view that depend on that module is placed at. <br />

src/repositories/***module name***/logic : this is more like infrastrcutre layer go in our case it's logic. <br />
