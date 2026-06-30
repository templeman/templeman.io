start:
  hugo serve

build:
  hugo

deploy:
  hugo && rsync -avz --delete public/ templeman@templeman.io:/var/www/templeman.io/public/
