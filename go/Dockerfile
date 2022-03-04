FROM golang:1.18rc1-bullseye AS builder
RUN mkdir -p /app
WORKDIR /app
COPY src .
RUN go build main.go

FROM scratch
WORKDIR /app
COPY --from=builder /app/main .
CMD ["/app/main"]