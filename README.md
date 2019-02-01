# AI-Playground


AI Playground is a ReactJs project which uses React v16 ,Redux and webpack .

### Installation

AI-Playground requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/jayesh96/ai-playground.git
$ npm install --save
$ npm install --only=dev
$ npm start
$ npm run build(for production)
```

### Components and Containers

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

|  | |
| ------ | ------ |
| Components | Button,Chat,codeEditor,Header, Image, loadingDots,tabs |
| Containers | LeftPanel, RightPanel, Index,ChatBox, |

# How to use

  Left Panel is used to write some functions, which reflects when apply changes button is clicked. Here "jayesh" is a globally assigned class object. For eg
  ```sh
function floorVal(val){
    return Math.floor(val) 
}
function value(val){
    return jayesh.getValue(val)
}
```
Right Panel is used to input some text which gets reflected in chat box.The Loading state is called in case of delayed response

# Demo
See [Video Here](https://drive.google.com/file/d/1oU_AUTujztoFzDru95HIeckw7LKJfXdN/view)



