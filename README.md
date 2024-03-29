# Now4real Localization Resources

| Language                 | `Widget`                 | `User App`               | `Email`                  |
| -------------------------| -------------------------| -------------------------| -------------------------|
| 🇧🇬 Bulgarian `bg`         | ✅                        | ✅                        | ✅                        |
| 🇩🇪 German `de`            | ⚠️                       | ✅                        | ✅                        |
| 🇺🇸 English `en`           | ✅                        | ✅                        | ✅                        |
| 🇪🇸 Spanish `es`           | ⚠️                       | ✅                        | ✅                        |
| 🇫🇷 French `fr`            | ✅                        | ✅                        | ✅                        |
| 🇮🇹 Italian `it`           | ✅                        | ✅                        | ✅                        |
| 🇲🇳 Mongolian `mn`         | ✅                        | ✅                        | ✅                        |
| 🇵🇱 Polish `pl`            | ✅                        | ✅                        | ✅                        |
| 🇵🇹 Portuguese `pt`        | ⚠️                       | ✅                        | ✅                        |
| 🇷🇴 Romanian `ro`          | ⚠️                       | ✅                        | ✅                        |
| 🇸🇻 Swedish `sv`           | ✅                        | ✅                        | ✅                        |

✅ translation completed  
⚠️ partial translation (look for comments "**// TODO**")  
❌ translation missing

## Modules
The project consists of 3 different modules, each of them is used on different moments of the Now4real user experience.

We recommend taking into consideration all the files during your contribution, in order to give the users the best experience.

### Widget

The `widget.js` file contains the translation of all the strings present on the standard Now4real widget.

### User App

The `user-app.js` file contains the translation of all the strings present on the user app, which is mainly used to handle the email authentication flow.

### Email

The `email` folder contains email templates.

Each file in this folder is an HTML template.
The first line of the file is the email's subject, the other lines are the email's body.

## Rules for Translators

If you want to contribute, please create a pull request to propose an unsupported language or enhance/finalize an existing one. We will take care of validating the proposal and merging it to the master branch.

If the language doesn't exist, clone the **ENGLISH (en)** folder by renaming it to the target language code. We support Alpha-2 codes from https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes (see the "ISO 639-1" column).


If the language is incomplete or can be optimized, feel free to update the existing file.

Please consider the following rules:
- All the text after symbols **/*** and **//** are comments and must not be translated.
- Please read the comments to understand the context of the translation.
- For each row, only the text after the colon (**:**) must be translated.
    Example:
    'monitor.siteViewersTitle': 'People viewing this site',
    is translated, for Italian, into
    'monitor.siteViewersTitle': 'Persone che stanno vedendo questo sito',
- Preserve all quotation marks (**'**) around the translations.
- If you need to use the apostrophe, write **\\'** instead of **'** (to distinguish it from quotation marks).
- Preserve commas at the end of lines (**,**).
- In some cases, phrases contain placeholders, which are expressed as **$A**, **$B**, **$N**, etc.
    These placeholders must be kept in the translation and will be automatically replaced with actual data.
- Use gender-neutral language

Please get back to us for any doubts and clarifications! Reach out via GitHub or at support@now4real.com
