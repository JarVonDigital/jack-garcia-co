Angular 21 website for Jack Garcia & Co.

- `npm start` — run the development server
- `npm run build` — create and prepare the production build
- `npm test -- --watch=false` — run the unit test suite once
- `npm run sync:instagram-assets` — refresh the locally hosted Instagram feed assets

## Production deployment

AWS Amplify builds from `amplify.yml` and publishes `dist/jack-garcia-co/browser`. The build also creates static entry points for `/about`, `/inquire`, and `/wedding-packages`, generates `404.html`, and removes source images that the live pages do not use. Source assets are not deleted.

`customHttp.yml` applies the production security headers when deployed through Amplify.

In **Amplify → Hosting → Rewrites and redirects**, keep this SPA rewrite as the final rule so future client-side routes also support direct visits:

```json
[
  {
    "source": "</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>",
    "status": "200",
    "target": "/index.html",
    "condition": null
  }
]
```

Before launch, confirm the first FormSubmit verification email sent to `jdgimages06@gmail.com`, attach the final custom domain, and verify HTTPS is active.
