# HTML and CSS
HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are two fundamental web development technologies used to create and design web pages. HTML is used for defining the structure of a web page, while CSS is used to style and layout the elements of the page.
# HTML
HTML is a markup language used for creating web pages. It defines the structure and content of the page by using tags and attributes. A tag is a keyword enclosed in angle brackets that defines an HTML element, while an attribute provides additional information about an element.
HTML documents are text files that can be created and edited with any text editor. The basic structure of an HTML document consists of the following elements:
htmlCopy code
<!DOCTYPE html> <html> <head> <title>Page Title</title> </head> <body> <h1>Heading 1</h1> <p>Paragraph 1</p> </body> </html> 
The <!DOCTYPE html> declaration defines the document type and must be the first line of an HTML document. The <html> element is the root element of the document and contains all other elements. The <head> element contains information about the document, such as the page title, meta tags, and links to external resources. The <body> element contains the visible content of the page.
HTML provides a wide range of elements for creating headings, paragraphs, lists, links, images, forms, tables, and other types of content. The full list of HTML elements can be found in the W3C HTML specification.
# CSS
CSS is a style sheet language used for describing the presentation of an HTML document. It separates the style and layout of a web page from its content, making it easier to change the appearance of a page without modifying its underlying structure.
CSS works by selecting HTML elements and applying styles to them using selectors and properties. A selector is a pattern that matches one or more elements in an HTML document, while a property is a style attribute that modifies the appearance of an element.
CSS styles can be defined in three ways:
1.	Inline styles: applied directly to an HTML element using the style attribute.
htmlCopy code
<p style="color: red; font-size: 16px;">This paragraph has red text and a font size of 16 pixels.</p> 
2.	Internal styles: defined in the <head> section of an HTML document using the <style> element.
htmlCopy code
<head> <style> p { color: red; font-size: 16px; } </style> </head> <body> <p>This paragraph has red text and a font size of 16 pixels.</p> </body> 
3.	External styles: defined in a separate CSS file and linked to an HTML document using the <link> element.
htmlCopy code
<head> <link rel="stylesheet" href="styles.css"> </head> 
cssCopy code
p { color: red; font-size: 16px; } 
CSS provides a wide range of properties for modifying the color, size, position, font, and other aspects of an HTML element. The full list of CSS properties can be found in the W3C CSS specification.
# Conclusion
HTML and CSS are essential skills for web development. By mastering these technologies, you can create and design beautiful and functional web pages. Remember to always write clean and well-structured code, and to stay up to date with the latest web devel
