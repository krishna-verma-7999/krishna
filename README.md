# importing

npm install react-icons
npm install framer-motion

1. motion component use use-effect. so whenever we use motion component from framer motion then we have to convert that page into client component by "use client" placing at the top.

2. we are going to use react-intersection-observer package to track the viewport.
   (npm install react-intersection-observer --save)

3. react-vertical-timeline-component => for experience component.
   => we can't use tailwind with it

# Email

4. for form submission we are going to use server actions
   => we don't need to use api routes.
   => we are going to use resend for sending email.
   Api key => re_3YEJ7URQ_21BPGML1z8Xf8Gp9zX712uu8

   package name => npm i resend@0.16.0

=> if you want to style you email then use react-email
cmd => npm install @react-email/components @react-email/tailwind

=>React hot toast is library that we are going to use to handle with feedback. :-> npm i react-hot-toast

# dark theme

=> window.matchMedia("(prefers-color-scheme :dark)").matches := to check the theme of your system.
