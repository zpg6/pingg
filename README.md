<img src="src/assets/images/pingg_logo_bg.png"
     alt="pingg"
     style="float: center;" />

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Install Angular CLI

Install Angular globally on your machine with this snippet.  
`npm install -g @angular/cli`

## Coding Angular with Typescript

[VSCode](https://code.visualstudio.com) with the Angular extension is recommended due to good code suggestion and real-time lint for the **Typescript** and Angular syntaxes.

## Creating a Playground

To play around with some Angular on the side before getting into this repository's project files, it would be helpful to check out [Using Angular in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/angular-tutorial). Be sure to use **Typescript** and **CSS**.

If you haven't used Angular before, please watch this [video](https://www.youtube.com/watch?v=23o0evRtrFI) and use VSCode to replicate what he makes. It's important for everyone working on aspects of an Angular project to understand the concept of component hierarchy and reusability.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. It may be easier to use the Terminal/CommandPrompt inside of VSCode. I use one Terminal for `ng g ...` commands and one that runs the server and re-compiles in real-time after running `ng serve` and leaving it open in the background.

> NOTE: Creating a component with the command `ng g component chatWindow` will create a component `chat-window-component`. In other words, no need to add the type of the newly scaffolded code to the name of it, Angular CLI will add it for you. Newly scaffolded files are placed in the following folder: 
> 
> ./src/app/GETS_PLACED_HERE

## Bulma CSS Styling

[Bulma](https://bulma.io) is a modern CSS framework initially developed, like many others, in response the popular Bootstrap CSS framework. It's a CSS only framework with no JavaScript required, so it integrates in any environment by npm, jsDelivr CDN, and download for a one-time project-wide import. With a column-based layout, making Bulma perfect for quickly designing web pages for widescreen, desktop, tablet, and mobile screens.

Bulma is already imported to the pingg **`app-module`** and ready to use project-wide without any further import statements. It's located in the `./src/bulma` directory. 

### Icons

The [Bulma Documentation](https://bulma.io/documentation/) includes code snippets for use with [Font Awesome 5 Icons](https://fontawesome.com/icons?d=gallery). These are also imported project-wide and ready for use with any Bulma snippets. *NOTE: Only **Free** icons will work.*

## Firebase

We will be using [Firebase Hosting](https://firebase.google.com/docs/hosting) as the deployment service for our Angular Web App.

We'll be using the official package for Angular called [AngularFire](https://github.com/angular/angularfire). You'll find they have extensive documentation on all of the Firebase back-end ervices "pingg" will rely on including:

- [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firebase Cloud Storage](https://firebase.google.com/docs/storage)


## Run the Development Server

To run, `cd` to the repository root folder and run `ng serve` for a local dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change and save any of the source files.


## Further Help

- To see some great example videos from *basic Angular* to *integrating with Firebase* to *server-side cloud functions*, click this link [FireShip Playlists on YouTube](https://www.youtube.com/c/AngularFirebase/playlists) and select the topic you're working on.

- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

- To read more about Angular concepts like components, modules, pipes, etc. please visit [angular.io/docs](https://angular.io/docs).

- For more help with how Firebase services work, see [Firebase Docs](https://firebase.google.com/docs/guides). There won't necessarily be Typescript code snippets there you can use in Angular, you can however change the snippet examples to a language you're familiar with to better understand the concept.


