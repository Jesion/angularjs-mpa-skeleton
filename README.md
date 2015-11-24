# angularjs-mpa-skeleton
AngularJS Multiple Page Application Skeleton

# required nginx server settings

```
server {
        listen       80;
        server_name  localhost;

        if ( $request_filename ~ /index.html ) {
            rewrite ^ http://localhost/signin.html permanent;
        }

        location / {
            root   html/app;
            index  index.html;
        }

        location /signin {
            root html/app/modules/signin;
        }

        location /home {
            root html/app/modules/home;
        }
}
```