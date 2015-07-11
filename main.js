var phone = prompt("Enter your phone number with dashes like XXX-XXX-XXX")
if (phone[3] === "-" && phone[7] === "-" )
alert("hey that's right!")
else
alert("re-enter your phone number")


var birth = prompt("enter your birthday like this xx/xx/xx")
if (birth[2] === "/" && birth[5] === "/" )
alert("hey that's right!")
else
alert("re-enter your birth day")


var postal = prompt("Enter your phone number with dashes like XXX-XXX-XXX")
if (postal.length === 5 || postal[5] === "-" )
alert("hey that's right!")
else
alert("re-enter your postal code")


var state = prompt("Enter your state abbreviation, it's gotta be capitalized and only two letter!")
if (state.length === 2 && state === state.toUpperCase())
alert("hey that's right!")
else
alert("re-enter your state")



var married = prompt("are you married? yes or no?")
if (married.toUppercase() === "YES" || married.toUppercase() === "NO" )
alert("cool, be good your lucky pal!")
else
alert("try again!")
