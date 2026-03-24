/* Some browser may not support the 'download' attribute on links
   So this script detects that and shows a message telling users how to download manually.
   Our code says: Hey browser, if you don't know how download works, 
   i will help the user by showing instructions.
*/

document.addEventListener('DOMContentLoaded', function() {

    if (!('download' in HTMLAnchorElement.prototype)) {
        const links = document.querySelectorAll('a');

        links.forEach(function(link) {
            if (link.hasAttribute('download')) {
                const el = document.createElement('div');
                el.className = 'download-instructions';
                el.textContent = 'Right-click and select "Downlaod Linked File"';

                link.insertAdjacentElement('afterend', el);
            }
        });
    }
});

/** Explanation
 
document.addEventListener('DOMContentLoaded', function() 
This code means wait until the whole webpage is loaded before doing anything.
{

    if (!('download' in HTMLAnchorElement.prototype))
    Means: if the browser does NOT (!) understad the download feature.
    So we only help users when needed.
    
    {
        const links = document.querySelectorAll('a');
        Means: grab all the links (<a> tags) on the page

        links.forEach(function(link) {
        Means: check each link one at a time.

            if (link.hasAttribute('download')) {
            Means: is this link meant to download something?
            links like this: <a href="file.pdf" download>Download</a>

                const el = document.createElement('div');
                Means: this creates a new box (a <div>)

                el.className = 'download-instructions';
                Means: putting a lanbel on the box so we can style it later with CSS.

                el.textContent = 'Right-click and select "Downlaod Linked File"';
                Means: this message the user will see.

                link.insertAdjacentElement('afterend', el);
                Means: Place the message right after the download link.
            }
        });
    }
});

So if the browser is old: 
Download file
Right-click and select "Download Linked File"

Or if the browser is modern, then nothing extra shows (because the button will download the file).

Our code says: Hey browser, if you don't know how download works, 
   i will help the user by showing instructions.
*/
/**
 * Reason for using DOM?
 * 
 * 1. Field elemnts on the page.
 *    document.querySelectorAll('a');
 *    this uses DOM to find all the <a> (link) elements on the page
 *    Without the DOM, JavaScript wouldn't know these links even exist.
 * 
 * 2. Check their attributes
 *    (link.hasAttribute('download')
 *    this uses DOM to check if the link has a 'download' attribute.
 * 
 * 3. Create new elements
 *    document.createElement('div')
 *    this uses DOM to create a new peice of the webpage.
 * 
 * 4. Add content and classes
 *    el.className = 'download-instructions';
      el.textContent = 'Right-click and select "Downlaod Linked File"';
      this modifies the DOM: put text inside the new element and style it.

    5. Insert it into the page
       link.insertAdjacentElement('afterend', el);
       this updates DOM: place the new message on the page.

 */



