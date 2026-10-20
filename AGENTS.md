<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application conventions
- Keep the prospecting landing page in the index route, with reusable visual roles in the global design system, so its identity stays consistent.
- Use the shared Button variants for calls to action and direct WhatsApp links with context-specific messages; no contact data is collected by the application.
- Keep portfolio browsing in a reusable Embla carousel on the landing page and redirect the legacy gallery URL to that section, so the lead stays in the WhatsApp conversion flow; keep original asset records in a browser-safe data module.
