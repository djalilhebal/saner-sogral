# Saner Sogral
A saner version than Sogral's official bus timetable app **\[WIP\]**

This repo contains a scrapper and a web app that were developed back in July 2019 when I started learning functional programming with Ramda.

***Disclaimer: This is an unofficial app, and it is not affiliated to or endorsed by Sogral.***

Note: The "there are no trips to show" error can occur because (Sogral's published) data are incomplete.


## Features
Compared to the official thingy:

- **Offline-first**, light, Single Page App

- **Bookmarkable** departure-destination pages (e.g. Annaba-Constantine: https://djalil.me/saner-sogral/#depart=12&dest=18)

- **Installable** as PWA

- **Accessible** \[WIP]


## Technologies used
Main tools used (see dependencies in package.json for a complete list):
- NodeJS
- Ramda


## Data format
`sogral-data.json` is of this schema:

```ts
interface SogralData {
    // format: 0,
    date: string,
    departs: Array<{
        code: number
        name: string
        dests: Array<{
            code: number
            name: string
            voyages: Array<{ // sorted by 'heure'
                heure: string
                prix: string
                ligne: string
                transporteur: string
            }>
        }>
    }>
}
```


## TODO

### Format v1
```ts
interface SogralData {
    format: 1,
    updatedDate: string,
    departures: Array<{
        code: number
        name: string
        destinations: Array<{
            code: number
            name: string
            trips: Array<{
                time: string
                price: string
                route: string
                transporter: string
            }>
        }>
    }>
}
```


## License
WTFPL
