let timeLeft = 30;
let timer;
let username = "";

const quizData = {

HTML: [

{
question: "Which HTML5 element is used for semantic navigation?",
options: ["&lt;nav&gt;", "&lt;section&gt;", "&lt;div&gt;", "&lt;aside&gt;"],
answer: "&lt;nav&gt;"
},

{
question: "Which attribute is used to open link in new tab?",
options: ["target='_blank'", "href='new'", "open='new'", "tab='blank'"],
answer: "target='_blank'"
},

{
question: "Which tag is used for largest heading?",
options: ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;heading&gt;", "&lt;head&gt;"],
answer: "&lt;h1&gt;"
},

{
question: "HTML5 introduced which feature?",
options: ["Semantic tags", "Tables only", "Flash support", "Frames only"],
answer: "Semantic tags"
},

{
question: "Which tag is used for video?",
options: ["&lt;video&gt;", "&lt;media&gt;", "&lt;movie&gt;", "&lt;vid&gt;"],
answer: "&lt;video&gt;"
},

{
question: "Which attribute provides alternate text for image?",
options: ["alt", "title", "src", "href"],
answer: "alt"
},

{
question: "Which tag is used for line break?",
options: ["&lt;br&gt;", "&lt;lb&gt;", "&lt;break&gt;", "&lt;hr&gt;"],
answer: "&lt;br&gt;"
},

{
question: "Which tag is used for table row?",
options: ["&lt;tr&gt;", "&lt;td&gt;", "&lt;th&gt;", "&lt;table&gt;"],
answer: "&lt;tr&gt;"
},

{
question: "Which tag defines a list item?",
options: ["&lt;li&gt;", "&lt;ul&gt;", "&lt;ol&gt;", "&lt;list&gt;"],
answer: "&lt;li&gt;"
},

{
question: "Which input type is used for password?",
options: ["password", "text", "secure", "hidden"],
answer: "password"
},

{
question: "Which tag is used for dropdown?",
options: ["&lt;select&gt;", "&lt;input&gt;", "&lt;dropdown&gt;", "&lt;list&gt;"],
answer: "&lt;select&gt;"
},

{
question: "Which tag is used for form?",
options: ["&lt;form&gt;", "&lt;input&gt;", "&lt;fieldset&gt;", "&lt;section&gt;"],
answer: "&lt;form&gt;"
},

{
question: "Which tag is used for hyperlink?",
options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"],
answer: "&lt;a&gt;"
},

{
question: "Which attribute specifies image source?",
options: ["src", "href", "link", "path"],
answer: "src"
},

{
question: "Which tag is used for bold text?",
options: ["&lt;b&gt;", "&lt;strong&gt;", "&lt;bold&gt;", "both &lt;b&gt; and &lt;strong&gt;"],
answer: "both &lt;b&gt; and &lt;strong&gt;"
},

{
question: "Which tag is used for italic text?",
options: ["&lt;i&gt;", "&lt;em&gt;", "both", "&lt;italic&gt;"],
answer: "both"
},

{
question: "Which HTML element is used for section grouping?",
options: ["&lt;section&gt;", "&lt;div&gt;", "&lt;span&gt;", "&lt;group&gt;"],
answer: "&lt;section&gt;"
},

{
question: "Which tag is used for horizontal line?",
options: ["&lt;hr&gt;", "&lt;line&gt;", "&lt;br&gt;", "&lt;border&gt;"],
answer: "&lt;hr&gt;"
},

{
question: "Which HTML element is used for metadata?",
options: ["&lt;meta&gt;", "&lt;data&gt;", "&lt;head&gt;", "&lt;info&gt;"],
answer: "&lt;meta&gt;"
},

{
question: "Which tag is used for script?",
options: ["&lt;script&gt;", "&lt;js&gt;", "&lt;code&gt;", "&lt;javascript&gt;"],
answer: "&lt;script&gt;"
},

{
question: "Which tag is used for CSS linking?",
options: ["&lt;link&gt;", "&lt;style&gt;", "&lt;css&gt;", "&lt;script&gt;"],
answer: "&lt;link&gt;"
},

{
question: "Which input type is used for email?",
options: ["email", "text", "mail", "input"],
answer: "email"
},

{
question: "Which input type is used for number?",
options: ["number", "num", "int", "digit"],
answer: "number"
},

{
question: "Which tag is used for canvas?",
options: ["&lt;canvas&gt;", "&lt;paint&gt;", "&lt;draw&gt;", "&lt;graphic&gt;"],
answer: "&lt;canvas&gt;"
},

{
question: "Which HTML element is used for footer?",
options: ["&lt;footer&gt;", "&lt;bottom&gt;", "&lt;end&gt;", "&lt;section&gt;"],
answer: "&lt;footer&gt;"
},

{
question: "Which HTML element is used for header?",
options: ["&lt;header&gt;", "&lt;head&gt;", "&lt;top&gt;", "&lt;section&gt;"],
answer: "&lt;header&gt;"
},

{
question: "Which tag is used for audio?",
options: ["&lt;audio&gt;", "&lt;sound&gt;", "&lt;music&gt;", "&lt;mp3&gt;"],
answer: "&lt;audio&gt;"
},

{
question: "Which tag is used for iframe?",
options: ["&lt;iframe&gt;", "&lt;frame&gt;", "&lt;embed&gt;", "&lt;window&gt;"],
answer: "&lt;iframe&gt;"
},

{
question: "Which HTML element is used for emphasis?",
options: ["&lt;em&gt;", "&lt;strong&gt;", "&lt;i&gt;", "&lt;b&gt;"],
answer: "&lt;em&gt;"
},

{
question: "Which HTML version is latest?",
options: ["HTML5", "HTML4", "XHTML", "HTML3"],
answer: "HTML5"
}

],

C: [
{
question: "Who is the father of C language?",
options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"],
answer: "Dennis Ritchie"
},
{
question: "C language was developed in which year?",
options: ["1972", "1980", "1995", "1965"],
answer: "1972"
},
{
question: "Which symbol is used for single-line comment in C?",
options: ["//", "/* */", "#", "&lt;!-- --&gt;"],
answer: "//"
},
{
question: "Which function is the entry point of a C program?",
options: ["main()", "start()", "init()", "begin()"],
answer: "main()"
},
{
question: "Which header file is used for printf()?",
options: ["&lt;stdio.h&gt;", "&lt;conio.h&gt;", "&lt;stdlib.h&gt;", "&lt;string.h&gt;"],
answer: "&lt;stdio.h&gt;"
},
{
question: "Which format specifier is used for integer?",
options: ["%d", "%f", "%c", "%s"],
answer: "%d"
},
{
question: "Which operator is used for address of variable?",
options: ["&", "*", "#", "@"],
answer: "&"
},
{
question: "Which operator is used for pointer?",
options: ["*", "&", "%", "#"],
answer: "*"
},
{
question: "Which loop is guaranteed to execute at least once?",
options: ["do-while", "for", "while", "if"],
answer: "do-while"
},
{
question: "Which keyword is used to declare constant?",
options: ["const", "static", "final", "define"],
answer: "const"
},
{
question: "Which function is used to allocate memory dynamically?",
options: ["malloc()", "alloc()", "new()", "create()"],
answer: "malloc()"
},
{
question: "Which function is used to free memory?",
options: ["free()", "delete()", "remove()", "clear()"],
answer: "free()"
},
{
question: "Size of int in C is typically?",
options: ["2 or 4 bytes", "1 byte", "8 bytes", "16 bytes"],
answer: "2 or 4 bytes"
},
{
question: "Which keyword is used for structure?",
options: ["struct", "class", "structure", "obj"],
answer: "struct"
},
{
question: "Which keyword is used for conditional check?",
options: ["if", "for", "switch", "loop"],
answer: "if"
},
{
question: "Which statement is used for multiple conditions?",
options: ["switch", "if", "for", "while"],
answer: "switch"
},
{
question: "Which symbol is used for string termination?",
options: ["\\0", "\\n", "\\t", "\\r"],
answer: "\\0"
},
{
question: "Which function is used for input?",
options: ["scanf()", "printf()", "input()", "get()"],
answer: "scanf()"
},
{
question: "Which header file is used for memory functions?",
options: ["&lt;stdlib.h&gt;", "&lt;stdio.h&gt;", "&lt;string.h&gt;", "&lt;math.h&gt;"],
answer: "&lt;stdlib.h&gt;"
},
{
question: "Which operator is ternary operator?",
options: ["?:", "??", "::", "&&"],
answer: "?:"
},
{
question: "Which keyword is used for loop control?",
options: ["break", "stop", "exit", "end"],
answer: "break"
},
{
question: "Which keyword skips iteration?",
options: ["continue", "skip", "pass", "next"],
answer: "continue"
},
{
question: "C is which type of language?",
options: ["Procedural", "Object Oriented", "Functional", "Markup"],
answer: "Procedural"
},
{
question: "Which operator is logical AND?",
options: ["&&", "||", "&", "!"],
answer: "&&"
},
{
question: "Which operator is logical OR?",
options: ["||", "&&", "|", "!"],
answer: "||"
},
{
question: "Which function prints output?",
options: ["printf()", "scanf()", "print()", "output()"],
answer: "printf()"
},
{
question: "Which keyword defines function return type?",
options: ["int", "return", "void", "all"],
answer: "int"
},
{
question: "Which is used for character data type?",
options: ["char", "int", "float", "string"],
answer: "char"
},
{
question: "Which loop checks condition first?",
options: ["while", "do-while", "repeat", "goto"],
answer: "while"
},
{
question: "Which symbol ends a statement in C?",
options: [";", ":", ".", ","],
answer: ";"
}
],

"C++":[
{
question: "Who created C++?",
options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
answer: "Bjarne Stroustrup"
},
{
question: "C++ is extension of which language?",
options: ["C", "Java", "Python", "Assembly"],
answer: "C"
},
{
question: "Which feature is NOT in C?",
options: ["OOP", "Pointers", "Functions", "Loops"],
answer: "OOP"
},
{
question: "Which keyword is used for class?",
options: ["class", "struct", "object", "define"],
answer: "class"
},
{
question: "Which access specifier is default in class?",
options: ["private", "public", "protected", "static"],
answer: "private"
},
{
question: "Which function is entry point in C++?",
options: ["main()", "start()", "init()", "begin()"],
answer: "main()"
},
{
question: "Which operator is used for scope resolution?",
options: ["::", ".", "->", ":"],
answer: "::"
},
{
question: "Which keyword is used for inheritance?",
options: ["public", "inherit", "extends", "super"],
answer: "public"
},
{
question: "Which constructor runs automatically?",
options: ["Default constructor", "Virtual constructor", "Static constructor", "Copy constructor only"],
answer: "Default constructor"
},
{
question: "Destructor is represented by?",
options: ["~ClassName", "ClassName()", "delete()", "free()"],
answer: "~ClassName"
},
{
question: "Which feature allows same function name?",
options: ["Function Overloading", "Inheritance", "Encapsulation", "Abstraction"],
answer: "Function Overloading"
},
{
question: "Which feature hides data?",
options: ["Encapsulation", "Inheritance", "Polymorphism", "Overloading"],
answer: "Encapsulation"
},
{
question: "Which keyword is used for dynamic memory?",
options: ["new", "malloc", "create", "alloc"],
answer: "new"
},
{
question: "Which keyword deletes memory?",
options: ["delete", "free", "remove", "clear"],
answer: "delete"
},
{
question: "Which header is used for input/output?",
options: ["&lt;iostream&gt;", "&lt;stdio.h&gt;", "&lt;conio.h&gt;", "&lt;stdlib.h&gt;"],
answer: "&lt;iostream&gt;"
},
{
question: "Which operator is used for object pointer?",
options: ["->", ".", "::", "&"],
answer: "->"
},
{
question: "Which is not OOP feature?",
options: ["Compilation", "Inheritance", "Polymorphism", "Encapsulation"],
answer: "Compilation"
},
{
question: "Which keyword is used for constant?",
options: ["const", "final", "static", "define"],
answer: "const"
},
{
question: "Which function is used for output?",
options: ["cout", "cin", "printf", "scan"],
answer: "cout"
},
{
question: "Which function is used for input?",
options: ["cin", "cout", "input", "get"],
answer: "cin"
},
{
question: "Which stream operator is used for output?",
options: ["<<", ">>", "::", "->"],
answer: "<<"
},
{
question: "Which stream operator is used for input?",
options: [">>", "<<", "::", "=="],
answer: ">>"
},
{
question: "Which concept means one function many forms?",
options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
answer: "Polymorphism"
},
{
question: "Which type of inheritance is not in C++?",
options: ["Hybrid", "Single", "Multiple", "Linear"],
answer: "Linear"
},
{
question: "Which keyword is used for virtual function?",
options: ["virtual", "override", "static", "friend"],
answer: "virtual"
},
{
question: "Which function allows runtime polymorphism?",
options: ["Virtual function", "Inline function", "Static function", "Friend function"],
answer: "Virtual function"
},
{
question: "Which keyword is used for namespace?",
options: ["namespace", "package", "scope", "module"],
answer: "namespace"
},
{
question: "Which standard namespace is used in C++?",
options: ["std", "system", "main", "cpp"],
answer: "std"
},
{
question: "Which is correct file extension of C++?",
options: [".cpp", ".c", ".java", ".py"],
answer: ".cpp"
},
{
question: "C++ supports which paradigm?",
options: ["OOP + Procedural", "Only OOP", "Only Procedural", "Only Functional"],
answer: "OOP + Procedural"
}
],
Java: [
{
question: "Who developed Java?",
options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"],
answer: "James Gosling"
},
{
question: "Java was developed at?",
options: ["Sun Microsystems", "Microsoft", "Google", "IBM"],
answer: "Sun Microsystems"
},
{
question: "Java is which type of language?",
options: ["Object-Oriented", "Procedural", "Assembly", "Markup"],
answer: "Object-Oriented"
},
{
question: "Which feature makes Java platform independent?",
options: ["JVM", "Compiler", "JDK", "JRE"],
answer: "JVM"
},
{
question: "Full form of JVM?",
options: ["Java Virtual Machine", "Java Variable Method", "Joint Virtual Machine", "Java Verified Model"],
answer: "Java Virtual Machine"
},
{
question: "Which keyword is used to create class?",
options: ["class", "struct", "object", "define"],
answer: "class"
},
{
question: "Which is entry point of Java program?",
options: ["main()", "start()", "init()", "run()"],
answer: "main()"
},
{
question: "Which keyword is used for inheritance?",
options: ["extends", "inherit", "super", "this"],
answer: "extends"
},
{
question: "Which keyword is used for interface?",
options: ["interface", "class", "implements", "abstract"],
answer: "interface"
},
{
question: "Which keyword implements interface?",
options: ["implements", "extends", "import", "instanceof"],
answer: "implements"
},
{
question: "Which feature hides data?",
options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
answer: "Encapsulation"
},
{
question: "Which feature allows many forms?",
options: ["Polymorphism", "Encapsulation", "Abstraction", "Compilation"],
answer: "Polymorphism"
},
{
question: "Which keyword is used for object creation?",
options: ["new", "create", "make", "alloc"],
answer: "new"
},
{
question: "Which is NOT primitive type in Java?",
options: ["String", "int", "char", "float"],
answer: "String"
},
{
question: "Which package is imported by default?",
options: ["java.lang", "java.util", "java.io", "java.net"],
answer: "java.lang"
},
{
question: "Which keyword is used for exception handling?",
options: ["try", "catch", "throw", "all of these"],
answer: "all of these"
},
{
question: "Which block always executes?",
options: ["finally", "catch", "try", "throw"],
answer: "finally"
},
{
question: "Which keyword is used to throw exception?",
options: ["throw", "throws", "catch", "try"],
answer: "throw"
},
{
question: "Which keyword declares exception?",
options: ["throws", "throw", "try", "catch"],
answer: "throws"
},
{
question: "Which loop checks condition first?",
options: ["while", "do-while", "for", "repeat"],
answer: "while"
},
{
question: "Which keyword prevents inheritance?",
options: ["final", "static", "private", "const"],
answer: "final"
},
{
question: "Which keyword prevents method override?",
options: ["final", "static", "private", "abstract"],
answer: "final"
},
{
question: "Which keyword is used for abstraction?",
options: ["abstract", "interface", "class", "extends"],
answer: "abstract"
},
{
question: "Which memory is used for objects?",
options: ["Heap", "Stack", "Register", "Cache"],
answer: "Heap"
},
{
question: "Which method prints output?",
options: ["System.out.println()", "print()", "cout", "printf"],
answer: "System.out.println()"
},
{
question: "Which operator compares values?",
options: ["==", "=", "===", "!="],
answer: "=="
},
{
question: "Which keyword refers current object?",
options: ["this", "self", "me", "obj"],
answer: "this"
},
{
question: "Which keyword refers parent class?",
options: ["super", "parent", "base", "this"],
answer: "super"
},
{
question: "Which is Java file extension?",
options: [".java", ".class", ".js", ".jv"],
answer: ".java"
},
{
question: "Which is compiled Java file extension?",
options: [".class", ".java", ".exe", ".bin"],
answer: ".class"
}
],
Python: [
{
question: "Who created Python?",
options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
answer: "Guido van Rossum"
},
{
question: "Python is which type of language?",
options: ["Interpreted", "Compiled only", "Assembly", "Machine language"],
answer: "Interpreted"
},
{
question: "Which symbol is used for comments in Python?",
options: ["#", "//", "/* */", "&lt;!-- --&gt;"],
answer: "#"
},
{
question: "Which keyword defines function?",
options: ["def", "function", "fun", "define"],
answer: "def"
},
{
question: "Which data type is immutable?",
options: ["tuple", "list", "dict", "set"],
answer: "tuple"
},
{
question: "Which data type is ordered and mutable?",
options: ["list", "tuple", "set", "dict"],
answer: "list"
},
{
question: "Which keyword is used for loop?",
options: ["for", "loop", "iterate", "repeat"],
answer: "for"
},
{
question: "Which keyword is used for condition?",
options: ["if", "when", "check", "cond"],
answer: "if"
},
{
question: "Which operator is used for exponentiation?",
options: ["**", "^", "//", "%%"],
answer: "**"
},
{
question: "Which function is used to print output?",
options: ["print()", "echo()", "cout", "printf"],
answer: "print()"
},
{
question: "Which function is used for input?",
options: ["input()", "scan()", "get()", "read()"],
answer: "input()"
},
{
question: "Which keyword is used to create class?",
options: ["class", "object", "struct", "define"],
answer: "class"
},
{
question: "Which keyword is used for exception handling?",
options: ["try", "catch", "throw", "all of these"],
answer: "try"
},
{
question: "Which block always executes?",
options: ["finally", "catch", "try", "except"],
answer: "finally"
},
{
question: "Which keyword is used to handle exception?",
options: ["except", "catch", "handle", "error"],
answer: "except"
},
{
question: "Which symbol is used for list slicing?",
options: [":", "-", ".", ","],
answer: ":"
},
{
question: "Which function returns length?",
options: ["len()", "size()", "length()", "count()"],
answer: "len()"
},
{
question: "Which keyword is used for function return?",
options: ["return", "give", "send", "output"],
answer: "return"
},
{
question: "Which is NOT a Python data type?",
options: ["array", "list", "tuple", "dict"],
answer: "array"
},
{
question: "Which library is used for math operations?",
options: ["math", "calc", "numbers", "compute"],
answer: "math"
},
{
question: "Which keyword is used for loop termination?",
options: ["break", "stop", "exit", "end"],
answer: "break"
},
{
question: "Which keyword skips iteration?",
options: ["continue", "skip", "pass", "next"],
answer: "continue"
},
{
question: "Which keyword does nothing?",
options: ["pass", "null", "void", "none"],
answer: "pass"
},
{
question: "Which data type stores key-value pairs?",
options: ["dict", "list", "tuple", "set"],
answer: "dict"
},
{
question: "Which symbol is used for string?",
options: ["' ' or \" \"", "< >", "{ }", "( )"],
answer: "' ' or \" \""
},
{
question: "Which function converts to integer?",
options: ["int()", "float()", "str()", "num()"],
answer: "int()"
},
{
question: "Which function converts to string?",
options: ["str()", "int()", "float()", "text()"],
answer: "str()"
},
{
question: "Which keyword is used for lambda function?",
options: ["lambda", "def", "fun", "anon"],
answer: "lambda"
},
{
question: "Which operator checks equality?",
options: ["==", "=", "!=", "==="],
answer: "=="
},
{
question: "Which file extension is Python?",
options: [".py", ".java", ".cpp", ".js"],
answer: ".py"
}
]
};
let currentQuiz = [];
let currentLanguage = "";

/* ================= LOGIN ================= */
function loginUser(){
    let user = document.getElementById("username").value.trim();

    if(user === ""){
        alert("❗ Enter your name first");
        return;
    }

    username = user;

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("languageSelection").style.display = "block";
}

/* ================= LOAD QUIZ ================= */

    function loadQuiz(language){

    clearInterval(timer);

    currentLanguage = language;
    currentQuiz = quizData[language];

    console.log("Selected Language:", language);
    console.log("Quiz Data:", currentQuiz);

    // ✅ safety check
    if(!currentQuiz || !Array.isArray(currentQuiz)){
        alert("Quiz not found ❌ Check your quizData key");
        return;
    }

    // UI switch
    document.getElementById("languageSelection").style.display = "none";
    document.getElementById("quizBox").style.display = "block";
    document.getElementById("scoreBox").style.display = "none";
    document.getElementById("reviewBox").style.display = "none";

    document.getElementById("submitBtn").style.display = "block";
    document.getElementById("reviewBtn").style.display = "none";

    // timer reset
    timeLeft = 30;
    document.getElementById("timer").innerText = timeLeft;
    document.getElementById("timerBox").classList.remove("danger");

    startTimer();

    // quiz render
    let form = document.getElementById("quizForm");
    form.innerHTML = "";

    currentQuiz.forEach((q, index) => {

    if (!Array.isArray(q.options)) {
        console.log("OPTIONS ERROR:", q);
        return;
    }

    let div = document.createElement("div");
    div.className = "questionBlock";



    let optionsHTML = q.options.map(opt => `
    <label class="option">
        <input type="radio" name="q${index}" value="${opt}">
        <span>${opt}</span>
    </label>
`).join("");

    div.innerHTML = `
        <p class="question">Q${index + 1}. ${q.question}</p>
        <div class="options">${optionsHTML}</div>
    `;

    form.appendChild(div);
});

    console.log("Quiz Loaded Successfully ✔️");
}

/* ================= TIMER ================= */
function startTimer(){

    clearInterval(timer);

    let sound = document.getElementById("tickSound");

    timer = setInterval(()=>{
        document.getElementById("timer").innerText = timeLeft;

        if(timeLeft <= 5){
            document.getElementById("timerBox").classList.add("danger");

            if(sound){   // 🔥 FIX (error avoid)
                sound.currentTime = 0;
                sound.play();
            }
        }

        timeLeft--;

        if(timeLeft < 0){
            clearInterval(timer);
            submitQuiz();
        }

    },1000);
}

/* ================= SUBMIT ================= */
function submitQuiz(){
    clearInterval(timer);

    let finalScore = 0;

    currentQuiz.forEach((q, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);
        let userAns = selected ? selected.value : "No Answer";

        if(userAns === q.answer){
            finalScore++;
        }
    });

    // 🔥 SAVE SCORE
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    leaderboard.push({
        name: username,
        score: finalScore
    });

    leaderboard.sort((a,b) => b.score - a.score);

    leaderboard = leaderboard.slice(0,5);

    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    document.getElementById("quizBox").style.display = "none";
    document.getElementById("scoreBox").style.display = "block";

    document.getElementById("scoreText").innerText =
        `🎉 ${username}, Your Score: ${finalScore}/${currentQuiz.length}`;

    document.getElementById("reviewBtn").style.display = "inline-block";
    document.getElementById("progress").style.width = "100%";
}


/* ================= REVIEW ================= */
 function showReview(){

    let reviewHTML = `
    <h2>📋 Answer Review</h2>
`;

    currentQuiz.forEach((q, index) => {

        let selected = document.querySelector(`input[name="q${index}"]:checked`);
        let userAns = selected ? selected.value : "No Answer";

        let blockClass = (userAns === q.answer) ? "correct" : "wrong";

        let optionsHTML = "";

        q.options.forEach(opt => {

            let safeOption = String(opt)
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");

            let optionClass = "";

            // ✅ Correct answer
            if(opt === q.answer){
                optionClass = "correctOption";
            }

            // ✅ Wrong selected answer
            if(opt === userAns && userAns !== q.answer){
                optionClass = "wrongOption";
            }

            optionsHTML += `
                <label class="option ${optionClass}">
                    <input 
                        type="radio" 
                        disabled 
                        ${opt === userAns ? "checked" : ""}
                    >
                    <span>${safeOption}</span>
                </label>
            `;
        });

        reviewHTML += `
    <div class="questionBlock">

        <p class="question">
            Q${index + 1}. ${q.question}
        </p>

        <div class="options">
            ${optionsHTML}
        </div>

    </div>
`;
    });
   reviewHTML += `
</div>

    <div style="
        display:flex;
        justify-content:center;
        gap:15px;
        flex-wrap:wrap;
        margin-top:20px;
    ">

        <button class="action-btn" onclick="restartQuiz()">
            🔁 Restart Quiz
        </button>

        <button class="action-btn" onclick="backToScore()">
            ⬅ Back
        </button>

    </div>
`;


    document.getElementById("scoreBox").style.display = "none";
    document.getElementById("leaderboardBox").style.display = "none";
    document.getElementById("reviewBox").style.display = "block";
    document.getElementById("reviewBox").innerHTML = reviewHTML;
}
/* ================= RESTART ================= */
function restartQuiz(){
    clearInterval(timer);

    document.getElementById("quizBox").style.display = "none";
    document.getElementById("scoreBox").style.display = "none";
    document.getElementById("reviewBox").style.display = "none";

    document.getElementById("languageSelection").style.display = "block";

    timeLeft = 15;
    document.getElementById("timerBox").classList.remove("danger");
    document.getElementById("timer").innerText = 30;

    document.getElementById("quizForm").innerHTML = "";
}

/* ================= BUTTON FIX ================= */
document.addEventListener("DOMContentLoaded", function(){
    let submitBtn = document.getElementById("submitBtn");
    if(submitBtn){
        submitBtn.addEventListener("click", submitQuiz);
    }
});

let canvas, ctx;
let particles = [];

window.addEventListener("DOMContentLoaded", () => {

    canvas = document.getElementById("sparkCanvas");
    if(!canvas) return;

    ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for(let i=0;i<80;i++){
        particles.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height,
            r: Math.random()*2 + 1,
            d: Math.random()*1
        });
    }

    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);

        ctx.fillStyle = "white";

        particles.forEach(p=>{
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fill();
        });

        update();
    }

    function update(){
        particles.forEach(p=>{
            p.y += p.d;

            if(p.y > canvas.height){
                p.y = 0;
                p.x = Math.random()*canvas.width;
            }
        });
    }

    setInterval(draw,30);
});

function showLeaderboard(){

    document.getElementById("scoreBox").style.display = "none";
    document.getElementById("leaderboardBox").style.display = "block";

    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    let list = document.getElementById("leaderboardList");

    list.innerHTML = "";

    if (leaderboard.length === 0) {
        list.innerHTML = "<li>No scores yet ❌</li>";
        return;
    }

    leaderboard.forEach((user, index) => {

        let li = document.createElement("li");

        // SAFE LINE 👇
       li.innerText = `${index + 1}. ${user?.name || "User"} - ${user?.score ?? 0}`;
        if (index === 0) {
            li.style.color = "gold";
            li.style.fontWeight = "bold";
        }

        list.appendChild(li);
    });
}
    function escapeHTML(str){
    return String(str)
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}
function backToScore(){

    // review box hide
    document.getElementById("reviewBox").style.display = "none";

    // leaderboard hide
    document.getElementById("leaderboardBox").style.display = "none";

    // score box show
    document.getElementById("scoreBox").style.display = "block";
}
    function showConfetti(){
  for(let i=0;i<50;i++){
    let conf = document.createElement("div");
    conf.innerHTML = "🎉";
    conf.style.position = "fixed";
    conf.style.left = Math.random()*100 + "vw";
    conf.style.top = "-20px";
    conf.style.fontSize = "20px";
    document.body.appendChild(conf);

    setTimeout(()=>conf.remove(), 2000);
  }
}