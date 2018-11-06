# Minimal example of stackdriver cloud-debugger in k8s
Build the docker container with 

`docker build .`

tag it

`docker tag gcr.io/YOUR-PROJECT/debug-test`

run it

`kubectl run debug-test --image=gcr.io/YOUR-PROJECT/debug-test --port=3000`
