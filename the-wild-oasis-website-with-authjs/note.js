/*
What is React Suspense?
It is a built-in React component that we can use
to catch/isolate components (or entire substrees)
that are not ready to be rendered("suspending")
due to asynchronous process.

You can think of Suspense as being like a catch
block in a try-catch statement. But instead of
catching errors, it catches components dt r 
suspending.

Wt causes a component to be suspending?
1. Fetching data (with a supported library)
2. Loading code (with React's lazy loading)

d main use case is: Fetching data

Note: 
Components do NOT automatically suspend just because
an async operation is happening inside them. Integrating
async operations with Suspense is hard, so we use libraries
(React Query, Next.js etc)


Server-side rendering in Next.js
================================
Next.js is a React framework, so rendering is done by React.

Static rendering:
HTML is generated at built time or periodically in the
background by re-fetching data(ISR)

useful when data doesn't change often and is not personalized
to user (e.g. product page)

it is d default rendering strategy in Next.js (even wn a pg
or component fetches data)

When deployed to Vercel, each static route is automatically
hosted on a CDN

If all routes of an app are static, the entire app can be 
exported as a static site(SSG)



Dynamic rendering:
HTML is generated at request time (for each new request
reaches the server)

Makes sense if:
The data changes frequently and is personalized to the user 
(e.g. cart)

Rendering a route requires information dt depends on 
request (e.g search params)

A route automatically switches to dynamic rendering in certain
conditions.

When deployed to Vercel, each dynamic route becomes a 
severless funtion.


Partial Pre-Rendering
A new rendering strategy that combines static and dynamic
rendering in the same route.

A static (pre-rendered) shell is served immediately from a
CDN, leaving holes for dynamic content.

The slower dynamic content is streamed in as it's rendered
on the server.


The Caching Mechanisms
Server:
1. Request Memoization
What data?
Data fetched with similar GET requests (same url & options in
fetch function)

How long?
One page request(one render, one user)

AbortController is used to opt out

Works only in components (not route handlers or server actions)

2. Data Cache
What data?
Data fetched in a route or a single fetch request.

How long?
Indefinitely, even across re-deploys (can revalidate or opt out)

3. Full Route Cache
What data?
Entire static pages (HTML and RSC payload)

How long?
Until d "Data cache" is invalidated (or app is re-deployed)

Client:
4. Router Cache
What data?
Pre-fetched and visited pages: static and dynamic

How long?
30 sec dynamic / 5 mins static (throughout one user session)

Experimenting with Caching and ISR:
npm run build && npm run start

Or add prod to package.json file
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",

    "prod": "next build && next export",
    
    "lint": "next lint"
},


Authenticatn
https://authjs.dev/

SECRET:
Type this into Google: generate secret vercel
https://github.com/sandrinodimattia/generate-secret

Use this: https://generate-secret.vercel.app/32

For Google
Search Google Developer Console
https://console.cloud.google.com/apis/dashboard









*/
