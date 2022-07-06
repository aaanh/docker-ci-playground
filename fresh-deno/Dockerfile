FROM ubuntu:latest as base
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

WORKDIR /app
COPY . .

RUN apt update && apt install -y unzip curl
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN export DENO_INSTALL="/root/.deno"
RUN export PATH="$DENO_INSTALL/bin:$PATH"

RUN bash -c /root/.deno/bin/deno install

CMD ["/root/.deno/bin/deno", "task", "start"]