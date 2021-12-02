# Topographic Attributes Maps - extended

![webtrees major version](https://img.shields.io/badge/webtrees-v2.0.x-green)
![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

This version is based on the 'Demo Implementation for Publication' as published 
on https://github.com/rpreiner/tam as of May 11, 2021.

The core functions are unchanged as described in README_TAM.md.

Call: Local in browser - double-click on 'index.htm'.

Tested with 'Firefox', 'Chrome', 'Edge', 'Brave' - each current version as of 01.12.2021.

GEDCOM was generated from webtrees-v2.0.

The presentation operates on the basis of D3.js - version 5, dynamically referenced.

### Notes

The 'Topographic Attribute Map' is only generated if you freeze the display. freeze the display, i.e. activate the 'F'-button.

If you want to import GEDCOM, you have to make sure that INDI and FAM sections are cleanly separated. are cleanly separated from each other. The corresponding NODE and LINK structures are created during the import process, references in FAM to INDIs that are not yet known INDI will lead to errors, which can cause a freeze or even a crash. freeze or even crash, in any case such links will not be formed and the formed and the representation has gaps not explained further.

## Extensions

### i18n

In the original version, all labels and messages are hardcoded. This has been changed, calls are now made to i18n.js, which was taken from https://github.com/roddeh/i18njs and is statically included.

The associated texts are in 'translations.js'.

### Contour tooltip

You can now show the year value of a contour line as a tooltip, which follows the cursor position.

This function can be turned on and off separately.

### family tooltip with MARR tag

The family tooltip now also shows the wedding date, derived from the MARR tag.
