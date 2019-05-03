<p align="center"><img src="https://static.sketchfab.com/img/press/logos/logo-sketchfab-grey.png" width="600" /></p>
<h1 align="center">Frontend Tech Exercise</h1>

Welcome ! This exercise is meant for us to gauge as best as possible your expertise in various fields, such as :

- Proficiency with Javascript/React
- Interaction with our REST API
- Sensivity to UX/UI topics, attention to detail

As such, the exercise itself is rather open ended. Only a few key points are mandatory. Rest assured that we will evaluate any feature/element you add that goes beyond those key points to their proper value.

This repository contains the bootstrap code for the exercise. To complete it, clone this repository to your local machine, create a branch, update it at your will, and create a PR against the repo. We will review it ASAP.

### Context

You've discovered Sketchfab a couple days ago and immediately determined that its 3D viewer is exactly what you needed to present your work. However, you wish you had your own more customized UI to present what you put there in a way that best fits your needs. And so, you've decided to build an alternative UI for Sketchfab, using their API and Create React App.

### Objectives

Your first mission is to upload a couple models on your Sketchfab account (the models themselves don't need to be anything more than cubes/planes/whatever you can find !). We'll be using those in the end result. Then, it's time to start building the UI. It should allow you to :

- List your own models
- List the models you've liked on sketchfab.com (in a separate list)
- When you click/select a model in either of those lists, the corresponding Sketchfab 3D embed should show up one way or the other — as well as at least some model metadata (title, description, author name ...). There are various ways to acquire the embed URL — pick your favourite.

The list of models should behave in a similar fashion to e.g. https://sketchfab.com/3d-models/popular — They have cards representing models, the cards display certain amounts of informations, and when you select one the model page appears. Those are the core features we're looking for. The form of the components you implement is not imposed. Anything going beyond the core features will be greatly appreciated, as will a particular attention to details on the core features. A few suggestions that come in mind would be e.g. :

- oauth authentication (if you go down this path, contact us for credentials !)
- Add like/share buttons (needs oauth)
- Upload UI
- More lists, filters
- Model metadata update UI
- Play with the Sketchfab Viewer API to add some weird features to the embed
- Some form of offline support
- ... We love to be surprised ! :)

### Resources

- [Sketchfab v3 API Token](https://sketchfab.com/settings/password)
- [Sketchfab v3 API docs](https://docs.sketchfab.com/data-api/v3/index.html)
- [Sketchfab developer resources](https://sketchfab.com/developers)
- [Sketchfab oAuth docs](https://sketchfab.com/developers/oauth) (Alternatively, auth0 has some much better written generalistic oauth documentation)
- [Sketchfab Viewer API docs](https://sketchfab.com/developers/viewer)
- [Create React App](https://github.com/facebook/create-react-app)
