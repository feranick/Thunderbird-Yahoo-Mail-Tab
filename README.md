# Yahoo Mail Tab
Unofficial Yahoo Mail add-on for Thunderbird, it adds a button that opens a Yahoo Mail tab in Thunderbird.
The [home page](https://addons.mozilla.org/thunderbird/addon/yahoomailtab/) of the extension contains some pictures and reviews.

#### Installing 
A new Yahoo Mail icon should appear in the top-right corner of Thunderbird. Click to open.

#### Installing from sources
Download the repository, zip it, rename it to Gmail-Tab.xpi and choose install addon from file in Thunderbird.

In linux the xpi file can be created with the following commands
* `git clone https://github.com/feranick/Thunderbird-Yahoo-Mail-Tab`
* `cd ./Thunderbird-Yahoo-Mail-Tab`
* `VERSION=$(cat ./manifest.json | jq --raw-output '.version')`
* `zip -r "../Yahoo-Mail-Tab-${VERSION}-tb.xpi" *`
