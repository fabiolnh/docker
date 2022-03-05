FROM nginx:latest

COPY src/default.conf /etc/nginx/conf.d

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]