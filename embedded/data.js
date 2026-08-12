/* Auto-generated from Embedded_Interview_Question.pdf — 416 questions.
   NOTE: correct answers are intentionally NOT in this file; they live
   server-side in the answer_key table (see supabase-evaluate-setup.sql). */
var EVAL_DATA = {
  "domain": "embedded",
  "domainLabel": "Embedded Engineer",
  "levels": {
    "fresher": {
      "label": "B.E Fresher",
      "desc": "For fresh B.E graduates",
      "mcqCount": 80,
      "codingCount": 0,
      "durationMinutes": 80,
      "modules": [
        {
          "name": "C",
          "type": "mcq",
          "questions": [
            {
              "id": 1,
              "text": "What is C language?",
              "options": [
                "An object-oriented interpreted language created by Bjarne Stroustrup in 1979",
                "A general-purpose, procedural compiled language developed by Dennis Ritchie in 1972",
                "A scripting language primarily used for web page development",
                "A markup language used to define hardware register layouts"
              ]
            },
            {
              "id": 2,
              "text": "What is the difference between a compiler and an interpreter?",
              "options": [
                "A compiler executes code line by line at runtime; an interpreter builds a standalone executable first",
                "Both compilers and interpreters produce an executable file before any code runs",
                "A compiler translates the whole program into machine code first; an interpreter runs code line by line at runtime",
                "An interpreter converts source code into assembly, while a compiler only checks syntax"
              ]
            },
            {
              "id": 3,
              "text": "What are the basic data types in C?",
              "options": [
                "int, char, float, and double, with modifiers like short, long, signed, and unsigned",
                "int, string, boolean, and double, since C supports built-in text and logical types",
                "Only int and char are basic types; float and double are library extensions",
                "byte, word, dword, and qword, borrowed from assembly language"
              ]
            },
            {
              "id": 4,
              "text": "What is a variable in C?",
              "options": [
                "A fixed memory address reserved only for constants that never change",
                "A named memory location that stores a value which can change, declared with a data type",
                "A special keyword the compiler reserves for internal bookkeeping",
                "A function that computes and returns a value each time it's called"
              ]
            },
            {
              "id": 5,
              "text": "What is the difference between = and == in C?",
              "options": [
                "= compares two values for equality; == assigns a value to a variable",
                "= and == are interchangeable in C and can be used for either purpose",
                "= assigns a value to a variable; == compares two values and returns true/false",
                "= is used only with pointers; == is used only with integers"
              ]
            },
            {
              "id": 6,
              "text": "What is a pointer?",
              "options": [
                "A variable that stores the memory address of another variable, declared using *",
                "A reserved keyword that marks a variable as read-only",
                "A special type of array that automatically resizes at runtime",
                "A label used only to name functions, not data"
              ]
            },
            {
              "id": 7,
              "text": "What is the difference between an array and a pointer?",
              "options": [
                "A pointer is a fixed-size contiguous block of memory, while an array can be reassigned freely",
                "Arrays and pointers are entirely identical in C with no functional differences",
                "An array is a fixed-size collection of same-type elements; a pointer holds an address and can be reassigned",
                "An array can only store addresses, while a pointer stores actual data values"
              ]
            },
            {
              "id": 8,
              "text": "What is a structure in C?",
              "options": [
                "A user-defined type that groups variables of different data types under one name",
                "A built-in collection that can only hold variables of the same data type",
                "A block of code that groups related function definitions together",
                "A C keyword used to declare private class members"
              ]
            },
            {
              "id": 9,
              "text": "What is the difference between structure and union?",
              "options": [
                "In a union, each member gets separate memory; in a structure, members share memory",
                "In a structure, members have separate memory (size = sum); in a union, members share memory (size = largest)",
                "Structures and unions both allocate memory equal to the sum of all their members",
                "A union can hold multiple valid members simultaneously, unlike a structure"
              ]
            },
            {
              "id": 10,
              "text": "What are storage classes in C?",
              "options": [
                "auto, static, extern, and register — defining a variable's scope, lifetime, and visibility",
                "public, private, protected, and friend — defining access control of variables",
                "Only two storage classes exist in C: local and global",
                "const, volatile, inline, and mutable — defining variable behavior at compile time"
              ]
            },
            {
              "id": 11,
              "text": "What is recursion?",
              "options": [
                "A technique where a function calls itself with a base case to solve smaller sub-problems",
                "A loop construct implemented using only goto statements",
                "The process of passing a function's address as an argument to another function",
                "A method where two functions call each other exactly once during execution"
              ]
            },
            {
              "id": 12,
              "text": "What is the difference between while and do-while loops?",
              "options": [
                "A while loop always executes at least once; a do-while loop may execute zero times",
                "Both while and do-while loops check their condition before executing the body",
                "A while loop checks the condition first; a do-while loop executes the body first, then checks",
                "A do-while loop has no condition and runs indefinitely until manually broken"
              ]
            },
            {
              "id": 13,
              "text": "What is a function prototype?",
              "options": [
                "The actual body and implementation code of a function",
                "A declaration of a function's name, return type, and parameters before its definition",
                "A preprocessor macro that substitutes a function call with inline code",
                "A comment block that documents what a function does for other programmers"
              ]
            },
            {
              "id": 14,
              "text": "What is the difference between call by value and call by reference?",
              "options": [
                "Call by value passes the variable's address; call by reference passes a copy of the value",
                "Call by value passes a copy of the argument; call by reference passes the address, affecting the original",
                "Both call by value and call by reference always leave the original variable unchanged",
                "Call by reference only works when passing arrays, never with individual variables"
              ]
            },
            {
              "id": 15,
              "text": "What is dynamic memory allocation in C?",
              "options": [
                "malloc() zero-initializes memory, while calloc() leaves it uninitialized",
                "Achieved using malloc(), calloc(), realloc(), and free() from stdlib.h",
                "Achieved automatically by the compiler without any library functions",
                "realloc() allocates new memory while free() resizes existing memory blocks"
              ]
            },
            {
              "id": 16,
              "text": "What is a NULL pointer?",
              "options": [
                "A pointer that always points to the first byte of allocated heap memory",
                "A pointer that does not point to any valid memory location; dereferencing it is undefined behavior",
                "A pointer that automatically gets freed when it goes out of scope",
                "A pointer reserved exclusively for use with array declarations"
              ]
            },
            {
              "id": 17,
              "text": "What is the difference between break and continue?",
              "options": [
                "break skips the current iteration; continue exits the loop entirely",
                "break and continue both terminate the loop immediately in the same way",
                "break exits the loop or switch entirely; continue skips to the next iteration",
                "continue can only be used inside switch statements, not loops"
              ]
            },
            {
              "id": 18,
              "text": "What is typedef in C?",
              "options": [
                "Creates an alias (alternate name) for an existing data type",
                "Defines a preprocessor macro constant, like #define does",
                "Declares a variable that can never be reassigned",
                "Creates an entirely new primitive data type unrelated to existing ones"
              ]
            },
            {
              "id": 19,
              "text": "What is the difference between local and global variables?",
              "options": [
                "Local variables are accessible throughout the program; global variables exist only within a function",
                "A local variable is scoped to its function/block; a global variable is accessible throughout the program",
                "Both local and global variables exist for the entire lifetime of the program",
                "Global variables must be declared inside main() to be valid"
              ]
            },
            {
              "id": 20,
              "text": "What is the difference between #define and const?",
              "options": [
                "#define is a typed, memory-allocated variable; const is a textual preprocessor substitution",
                "#define and const behave identically and are fully interchangeable in C",
                "#define performs textual substitution with no type checking; const is a typed variable that occupies memory and obeys scope",
                "const is resolved before compilation, while #define is checked by the compiler for type errors"
              ]
            }
          ]
        },
        {
          "name": "C++",
          "type": "mcq",
          "questions": [
            {
              "id": 21,
              "text": "What is C++ and how is it different from C?",
              "options": [
                "C++ is a stripped-down subset of C with fewer features and no pointers",
                "C++ adds object-oriented features like classes, inheritance, and polymorphism, plus overloading and exception handling, which C lacks",
                "C is the object-oriented language, while C++ is purely procedural",
                "C++ and C are identical languages with only different file extensions"
              ]
            },
            {
              "id": 22,
              "text": "What are the four pillars of Object-Oriented Programming?",
              "options": [
                "Encapsulation, Abstraction, Inheritance, and Polymorphism",
                "Compilation, Linking, Execution, and Debugging",
                "Class, Object, Method, and Variable",
                "Overloading, Overriding, Templates, and Exceptions"
              ]
            },
            {
              "id": 23,
              "text": "What is a class and an object?",
              "options": [
                "A class is an instance that occupies memory; an object is the blueprint that defines it",
                "Classes and objects are interchangeable terms for the same concept in C++",
                "A class is a blueprint defining data/behavior; an object is an instance of a class that occupies memory",
                "A class can only exist after an object of it has been created"
              ]
            },
            {
              "id": 24,
              "text": "What is a constructor and destructor?",
              "options": [
                "A destructor initializes an object on creation; a constructor releases resources on destruction",
                "A constructor is automatically called on object creation to initialize it; a destructor (prefixed ~) is called when the object goes out of scope",
                "Constructors and destructors are optional and rarely used in practice",
                "A constructor must always have a return type matching the class name"
              ]
            },
            {
              "id": 25,
              "text": "What is the difference between constructor and destructor?",
              "options": [
                "A constructor cannot be overloaded, but a destructor can accept multiple parameter sets",
                "Both constructors and destructors can be overloaded and accept parameters freely",
                "A destructor is called before object creation, and a constructor is called after",
                "A constructor can be overloaded with parameters and runs at creation; a destructor takes no arguments and runs at destruction"
              ]
            },
            {
              "id": 26,
              "text": "What is inheritance in C++?",
              "options": [
                "A mechanism where a derived class acquires properties of a base class, enabling code reuse",
                "A technique for redefining operators to work with user-defined types",
                "Supported only as single inheritance in C++, unlike other OOP languages",
                "A process where the base class completely hides all members of the derived class"
              ]
            },
            {
              "id": 27,
              "text": "What is polymorphism? Explain its types.",
              "options": [
                "Compile-time polymorphism uses virtual functions; runtime polymorphism uses operator overloading",
                "Polymorphism refers only to function overloading and has no runtime form",
                "Achieved via templates alone, with no distinction between compile-time and runtime",
                "Compile-time (static) polymorphism uses overloading; runtime (dynamic) polymorphism uses virtual functions and overriding"
              ]
            },
            {
              "id": 28,
              "text": "What is function overloading?",
              "options": [
                "Multiple functions with the same name and different parameters, resolved at compile time",
                "Multiple functions with the same name and parameters, resolved at runtime via virtual tables",
                "A single function redefined in a derived class with the exact same signature",
                "Only applicable to operators like + and -, not regular functions"
              ]
            },
            {
              "id": 29,
              "text": "What is operator overloading?",
              "options": [
                "Redefining existing operators like + and == to work with user-defined class types",
                "Creating entirely new operator symbols not found in standard C++",
                "Restricting operators from being used with any custom class",
                "Overriding a base class operator function in a derived class using virtual"
              ]
            },
            {
              "id": 30,
              "text": "What is a virtual function?",
              "options": [
                "A function resolved entirely at compile time, ignoring the actual object type",
                "A static member function that cannot be inherited by derived classes",
                "A base class function declared virtual and redefined in a derived class, enabling runtime polymorphism via dynamic binding",
                "A function that can only be called through an object, never through a pointer"
              ]
            },
            {
              "id": 31,
              "text": "What is encapsulation?",
              "options": [
                "Hiding implementation details entirely while showing only essential features",
                "Bundling data and methods into a class while restricting direct access using private/protected specifiers",
                "Merging several unrelated classes into a single global namespace",
                "Removing the need for access specifiers by making all members public"
              ]
            },
            {
              "id": 32,
              "text": "What is abstraction?",
              "options": [
                "Bundling data and functions into a class and restricting direct access to them",
                "Hiding internal implementation details and showing only essential features, via abstract classes and pure virtual functions",
                "Achieved solely by declaring all class members as private",
                "The process of removing unused member functions from a class"
              ]
            },
            {
              "id": 33,
              "text": "What is the difference between struct and class in C++?",
              "options": [
                "A struct cannot contain member functions or constructors, unlike a class",
                "Members and inheritance of a class default to public, while struct defaults to private",
                "Members and inheritance of a struct default to public, while a class defaults to private; both otherwise behave the same",
                "A struct cannot participate in inheritance, while a class can"
              ]
            },
            {
              "id": 34,
              "text": "What is the 'this' pointer?",
              "options": [
                "An implicit pointer in non-static member functions pointing to the calling object, used to resolve naming conflicts",
                "A global pointer shared by all objects of a class to save memory",
                "A pointer available only inside static member functions",
                "A pointer that always points to the base class portion of a derived object"
              ]
            },
            {
              "id": 35,
              "text": "What is a friend function?",
              "options": [
                "A member function that can only access public members of its own class",
                "A non-member function granted access to a class's private and protected members via the friend keyword",
                "A function automatically inherited by every derived class without declaration",
                "A special constructor used to create copies of an object"
              ]
            },
            {
              "id": 36,
              "text": "What is a namespace in C++?",
              "options": [
                "A declarative region that scopes identifiers to avoid naming conflicts, e.g., the std namespace",
                "A dedicated memory region used exclusively for dynamic allocation",
                "A special type of class that cannot contain data members",
                "A keyword used to define access specifiers for class members"
              ]
            },
            {
              "id": 37,
              "text": "What is the difference between new/delete and malloc()/free()?",
              "options": [
                "malloc() and free() call constructors and destructors, while new and delete only allocate raw memory",
                "new and delete are C++ operators that call constructors/destructors and are type-safe; malloc()/free() only allocate raw memory",
                "new and delete are functionally identical to malloc() and free(), just with different names",
                "new and delete are C library functions, while malloc()/free() are C++ operators"
              ]
            },
            {
              "id": 38,
              "text": "What is an inline function?",
              "options": [
                "A function whose code is expanded at the call site instead of a normal call, reducing overhead for small functions",
                "A function that is executed only once regardless of how many times it's called",
                "A function keyword that restricts access to private members only",
                "A function whose execution is deferred until the program terminates"
              ]
            },
            {
              "id": 39,
              "text": "What is a reference variable?",
              "options": [
                "A variable that stores a copy of another variable's value, independent after creation",
                "An alias for another variable, declared with &, that cannot be reassigned once initialized",
                "A reference can be reassigned to point to a different variable at any time",
                "A reference variable that must always be declared using the * symbol"
              ]
            },
            {
              "id": 40,
              "text": "What is the difference between public, private, and protected access specifiers?",
              "options": [
                "private is accessible everywhere; public is accessible only within the class",
                "protected members are accessible from anywhere outside the class, unlike public",
                "public is accessible from anywhere; private only within the class; protected within the class and derived classes",
                "private and protected are identical in scope and access rules"
              ]
            }
          ]
        },
        {
          "name": "Digital Electronics",
          "type": "mcq",
          "questions": [
            {
              "id": 41,
              "text": "What is the difference between analog and digital signals?",
              "options": [
                "Analog signals are discrete binary values; digital signals are continuous in time and amplitude",
                "Both analog and digital signals are continuous and vary smoothly over time",
                "An analog signal is continuous in time/amplitude; a digital signal is discrete, using binary values (0 and 1)",
                "Digital signals are only used for audio, while analog signals are used for data storage"
              ]
            },
            {
              "id": 42,
              "text": "What is a logic gate?",
              "options": [
                "A circuit that performs a logical operation on binary inputs to produce a binary output, based on Boolean algebra",
                "A circuit that amplifies an analog voltage signal to a higher level",
                "A memory element that permanently stores one bit of data",
                "A circuit that converts a digital signal back into an analog waveform"
              ]
            },
            {
              "id": 43,
              "text": "Give the truth table logic for AND, OR, and NOT gates.",
              "options": [
                "AND output is 1 when any input is 1; OR output is 1 only when all inputs are 1",
                "NOT gate requires two inputs and outputs 1 only when both differ",
                "AND output is 1 only when all inputs are 1; OR output is 1 when at least one input is 1; NOT inverts its input",
                "OR gate output is always 0 regardless of input values"
              ]
            },
            {
              "id": 44,
              "text": "What is De Morgan's theorem?",
              "options": [
                "(A·B)' = A' + B', and (A+B)' = A'·B' — used to simplify Boolean expressions",
                "(A·B)' = A'·B', and (A+B)' = A' + B', identical to the original expressions",
                "De Morgan's theorem applies only to XOR and XNOR gate expressions",
                "(A+B)' = A + B, meaning complementing a sum has no effect"
              ]
            },
            {
              "id": 45,
              "text": "What is the difference between combinational and sequential circuits?",
              "options": [
                "A sequential circuit's output depends only on current inputs; a combinational circuit needs memory elements",
                "A combinational circuit's output depends only on current inputs and has no memory; a sequential circuit depends on inputs and past states, needing memory elements",
                "Both combinational and sequential circuits require flip-flops to store state",
                "Combinational circuits are always clocked, while sequential circuits never use a clock"
              ]
            },
            {
              "id": 46,
              "text": "What is a flip-flop?",
              "options": [
                "A basic sequential element that stores one bit of data and changes state based on clock and input; types include SR, D, JK, T",
                "A combinational logic element with no memory that outputs based only on current inputs",
                "A storage element that always holds exactly one byte (8 bits) of data",
                "A logic gate that only operates without any clock or triggering signal"
              ]
            },
            {
              "id": 47,
              "text": "What is the difference between a latch and a flip-flop?",
              "options": [
                "A flip-flop is level-triggered, while a latch is edge-triggered",
                "Latches and flip-flops are identical, differing only in name",
                "A latch is level-triggered (changes while enable is active); a flip-flop is edge-triggered, changing only at a clock edge",
                "A latch requires a clock edge, while a flip-flop responds continuously to level changes"
              ]
            },
            {
              "id": 48,
              "text": "What is a multiplexer (MUX)?",
              "options": [
                "A circuit that takes a single input and routes it to one of several output lines",
                "A combinational circuit that selects one of several inputs and forwards it to a single output, using select lines",
                "A sequential circuit that stores multiple inputs before selecting one to output",
                "A circuit requiring 2n select lines to choose among n inputs"
              ]
            },
            {
              "id": 49,
              "text": "What is a demultiplexer (DEMUX)?",
              "options": [
                "A circuit that selects one of several inputs and forwards it to a single output",
                "A circuit that merges multiple input signals into a single combined output",
                "A circuit that takes a single input and routes it to one of several output lines based on select lines",
                "A circuit that operates without any select lines, choosing outputs randomly"
              ]
            },
            {
              "id": 50,
              "text": "What is the difference between an encoder and a decoder?",
              "options": [
                "A decoder converts many inputs into a compact binary code; an encoder expands a code into many outputs",
                "An encoder converts 2^n input lines into an n-bit code; a decoder converts an n-bit code into 2^n output lines",
                "Encoders and decoders perform the identical function, just with different names",
                "An encoder always produces more outputs than inputs, unlike a decoder"
              ]
            },
            {
              "id": 51,
              "text": "Explain binary, octal, decimal, and hexadecimal number systems.",
              "options": [
                "Binary (base-2, 0-1), octal (base-8, 0-7), decimal (base-10, 0-9), hexadecimal (base-16, 0-9 and AF)",
                "Binary (base-10), octal (base-8), decimal (base-2), hexadecimal (base-16) — bases as commonly confused",
                "Octal uses digits 0-9, while decimal uses digits 0-7, opposite of the standard convention",
                "Hexadecimal uses only digits 0-9, without any alphabetic characters"
              ]
            },
            {
              "id": 52,
              "text": "What is the difference between 1's complement and 2's complement?",
              "options": [
                "2's complement is obtained by inverting all bits; 1's complement adds 1 to that result",
                "1's complement is obtained by inverting all bits; 2's complement adds 1 to the 1's complement, and is preferred in computer arithmetic",
                "1's complement is preferred in computer arithmetic because it has two representations of zero",
                "Both 1's and 2's complement are calculated the same way, with no functional difference"
              ]
            },
            {
              "id": 53,
              "text": "What is a half adder and full adder?",
              "options": [
                "A full adder adds two bits with no carry input; a half adder adds three bits including a carry-in",
                "A half adder adds two single bits (sum and carry) with no carry input; a full adder adds two bits plus a carry-in, producing sum and carry-out",
                "Half adders and full adders both require a carry input to function",
                "A half adder is used only in subtraction circuits, never in addition"
              ]
            },
            {
              "id": 54,
              "text": "What is a counter? Differentiate ripple and synchronous counters.",
              "options": [
                "In a ripple counter, all flip-flops are clocked simultaneously; in a synchronous counter, each stage triggers the next",
                "A synchronous counter has more propagation delay than a ripple counter due to shared clocking",
                "In a ripple counter, flip-flops trigger sequentially from the previous stage causing delay; in a synchronous counter, all flip-flops are triggered by a common clock simultaneously",
                "Counters cannot be classified as ripple or synchronous; that distinction applies only to registers"
              ]
            },
            {
              "id": 55,
              "text": "What is a shift register?",
              "options": [
                "A chain of flip-flops that shifts stored binary data by one bit per clock pulse; types include SISO, SIPO, PISO, PIPO",
                "A combinational circuit that adds two binary numbers bit by bit",
                "A memory circuit that stores data permanently without needing any clock signal",
                "A circuit that only converts serial data to parallel, with no other configurations possible"
              ]
            },
            {
              "id": 56,
              "text": "What is propagation delay?",
              "options": [
                "The time it takes to charge a capacitor in dynamic memory before a refresh",
                "The time taken for a change in input to produce a change in output, limiting the maximum clock frequency",
                "A delay that has no impact on how fast a digital circuit can operate",
                "The startup delay before a microcontroller begins executing its program"
              ]
            },
            {
              "id": 57,
              "text": "What is the difference between SRAM and DRAM?",
              "options": [
                "DRAM uses flip-flops and needs no refreshing; SRAM stores charge in capacitors and needs refreshing",
                "SRAM uses flip-flops, is faster and needs no refresh, but is costlier — used for cache; DRAM stores charge in capacitors, needs refreshing, is cheaper and denser — used for main memory",
                "SRAM and DRAM are functionally identical, differing only in physical size",
                "DRAM is faster than SRAM because it doesn't require periodic refreshing"
              ]
            },
            {
              "id": 58,
              "text": "What is a Karnaugh map (K-map)?",
              "options": [
                "A graphical tool that simplifies Boolean expressions by grouping adjacent truth-table cells that differ by one variable",
                "A tool used to physically lay out circuit traces on a printed circuit board",
                "A lookup table used to convert binary numbers directly into hexadecimal",
                "A timing diagram used to measure the propagation delay of a circuit"
              ]
            },
            {
              "id": 59,
              "text": "What is a clock signal and why is it needed?",
              "options": [
                "A one-time reset pulse sent at power-up to initialize all registers",
                "A signal needed only by combinational circuits to compute their outputs",
                "A periodic signal that synchronizes sequential circuit operations, ensuring predictable state changes at defined intervals",
                "A signal whose sole purpose is to reduce the power consumption of a circuit"
              ]
            },
            {
              "id": 60,
              "text": "What is the difference between synchronous and asynchronous sequential circuits?",
              "options": [
                "In an asynchronous circuit, a common clock controls all state changes simultaneously",
                "Synchronous and asynchronous sequential circuits both require a shared clock to operate",
                "In a synchronous circuit, state changes are controlled by a common clock; in an asynchronous circuit, changes occur immediately on input change, risking timing hazards",
                "Asynchronous circuits are always faster and more predictable than synchronous circuits"
              ]
            }
          ]
        },
        {
          "name": "Microcontroller",
          "type": "mcq",
          "questions": [
            {
              "id": 61,
              "text": "What is a microcontroller?",
              "options": [
                "A compact IC combining a processor core, memory, and I/O peripherals on a single chip for embedded control tasks",
                "A chip containing only a CPU that requires external memory and peripheral chips",
                "A software program that simulates hardware behavior for testing",
                "A specialized sensor used to detect analog voltage changes"
              ]
            },
            {
              "id": 62,
              "text": "What is the difference between a microcontroller and a microprocessor?",
              "options": [
                "A microprocessor integrates CPU, memory, and I/O on one chip; a microcontroller needs external memory and peripherals",
                "A microcontroller integrates CPU, memory, and I/O peripherals on one chip; a microprocessor has only the CPU and needs external components",
                "Microcontrollers and microprocessors are functionally identical terms",
                "A microprocessor is used only in embedded systems, while a microcontroller is used for generalpurpose computing"
              ]
            },
            {
              "id": 63,
              "text": "What is an embedded system?",
              "options": [
                "A combination of hardware and software designed for a specific, dedicated function, often with real-time constraints",
                "A general-purpose computer designed to run many different unrelated applications",
                "A purely software application with no dedicated hardware component",
                "A cloud-hosted service that controls remote devices over the internet"
              ]
            },
            {
              "id": 64,
              "text": "Explain RAM, ROM, and Flash memory in a microcontroller.",
              "options": [
                "RAM is non-volatile and stores the program permanently; ROM is volatile and loses data at power-off",
                "RAM (volatile) stores temporary data; ROM (non-volatile) stores permanent factory data; Flash (non-volatile, erasable) typically stores reprogrammable code",
                "Flash memory is volatile and must be refreshed constantly like RAM",
                "ROM can be reprogrammed at runtime just like Flash memory"
              ]
            },
            {
              "id": 65,
              "text": "What is GPIO?",
              "options": [
                "Programmable pins configurable in software as digital input or output, used with LEDs, switches, sensors",
                "A dedicated set of pins that can only measure analog voltages",
                "A serial communication protocol used exclusively between two microcontrollers",
                "An output-only pin whose function is fixed at manufacture and cannot be reconfigured"
              ]
            },
            {
              "id": 66,
              "text": "What is an interrupt?",
              "options": [
                "A scheduled task that runs at fixed time intervals defined by the programmer",
                "A signal that suspends normal execution so the processor can respond immediately to an event via an ISR, then resumes",
                "A signal that permanently halts program execution until manual reset",
                "A special variable type used to store event flags without changing program flow"
              ]
            },
            {
              "id": 67,
              "text": "What is the difference between polling and interrupts?",
              "options": [
                "In interrupt-driven handling, the CPU continuously checks peripheral status in a loop",
                "Polling is always more efficient than interrupts because it avoids ISR overhead",
                "In polling, the CPU continuously checks a peripheral's status, wasting cycles; interrupts notify the CPU only when needed, which is more efficient",
                "Polling and interrupt-driven handling consume identical CPU resources"
              ]
            },
            {
              "id": 68,
              "text": "What is a timer/counter in a microcontroller?",
              "options": [
                "A hardware peripheral that measures time intervals or counts events, incrementing a register and optionally generating interrupts on overflow",
                "A purely software construct with no dedicated hardware support",
                "A peripheral that can only count down once from a fixed value and then stops permanently",
                "A register that stores time values but can never trigger an interrupt"
              ]
            },
            {
              "id": 69,
              "text": "What is an ADC?",
              "options": [
                "A peripheral that converts a digital value back into a continuous analog voltage",
                "A peripheral that converts an analog input voltage into a discrete digital value, characterized by resolution and sampling rate",
                "A serial communication interface used to transmit analog data between chips",
                "A peripheral that measures only digital square-wave signals, not analog ones"
              ]
            },
            {
              "id": 70,
              "text": "What is UART?",
              "options": [
                "A synchronous serial protocol that uses a shared clock line between devices",
                "A protocol that uses a single wire and a unique address for each connected device",
                "An asynchronous serial protocol transmitting data without a shared clock, using TX and RX lines",
                "A multi-master, multi-slave bus protocol using SDA and SCL lines"
              ]
            },
            {
              "id": 71,
              "text": "What is SPI?",
              "options": [
                "An asynchronous protocol using only TX and RX lines without a clock",
                "A synchronous protocol using MOSI, MISO, SCLK, and SS/CS lines, enabling full-duplex masterslave communication",
                "A two-wire protocol using SDA and SCL lines with device addressing",
                "A half-duplex protocol that cannot support multiple slave devices"
              ]
            },
            {
              "id": 72,
              "text": "What is I2C?",
              "options": [
                "A four-wire protocol using MOSI, MISO, SCLK, and SS lines for high-speed communication",
                "An asynchronous protocol requiring no clock line and only a single data wire",
                "A synchronous, multi-master/multi-slave protocol using two wires (SDA and SCL) with unique device addresses",
                "A protocol limited to exactly one master and one slave device at a time"
              ]
            },
            {
              "id": 73,
              "text": "What is a watchdog timer?",
              "options": [
                "A hardware timer that resets the microcontroller if software fails to periodically reset it, recovering from hangs or crashes",
                "A timer that only logs the total uptime of the microcontroller for diagnostics",
                "A circuit that monitors supply voltage and has no relation to software execution",
                "A timer designed to prevent the microcontroller from ever resetting itself"
              ]
            },
            {
              "id": 74,
              "text": "What is the role of a clock/oscillator in a microcontroller?",
              "options": [
                "A component that regulates and stabilizes the microcontroller's supply voltage",
                "A memory element that stores the program instructions to be executed",
                "Generates a periodic signal that synchronizes and drives internal operations like instruction execution and peripheral timing",
                "A peripheral used exclusively to time external UART communication, unrelated to internal execution"
              ]
            },
            {
              "id": 75,
              "text": "What is the difference between Harvard and Von Neumann architecture?",
              "options": [
                "In Harvard architecture, program and data share the same memory and bus",
                "In Von Neumann architecture, program memory and data memory are separate with independent buses",
                "In Von Neumann architecture, program and data share the same memory/bus; in Harvard architecture, they are separate with independent buses, improving performance",
                "Harvard and Von Neumann architectures are identical in how they access memory"
              ]
            },
            {
              "id": 76,
              "text": "What is a register in a microcontroller?",
              "options": [
                "A small, fast storage location inside the CPU or peripheral holding data, addresses, or control/status bits during execution",
                "A large block of external RAM used to store the entire program",
                "A non-volatile storage element that retains data even after power-off",
                "A storage location used exclusively to hold the final result of a completed program"
              ]
            },
            {
              "id": 77,
              "text": "What is a stack in a microcontroller?",
              "options": [
                "A region of Flash memory used to permanently store global variables",
                "A FIFO (first-in-first-out) buffer used to queue incoming interrupt requests",
                "A region of RAM storing return addresses and local variables in LIFO order via push/pop, used during function calls and interrupts",
                "A dedicated hardware register that holds only the program counter value"
              ]
            },
            {
              "id": 78,
              "text": "What is the difference between a pull-up and pull-down resistor?",
              "options": [
                "A pull-down resistor connects a line to VCC so it reads HIGH by default",
                "A pull-up resistor connects a line to VCC so it reads HIGH when not actively driven low; a pulldown connects to ground so it reads LOW when not driven high",
                "Pull-up and pull-down resistors serve no purpose when a pin is left floating",
                "A pull-up resistor connects the line to ground, forcing it LOW by default"
              ]
            },
            {
              "id": 79,
              "text": "What is PWM?",
              "options": [
                "A technique that varies the signal's frequency while keeping the duty cycle fixed, to control power",
                "An analog technique that produces a smoothly varying voltage without any switching",
                "A digital signal switching between HIGH and LOW at fixed frequency, varying duty cycle to control average power, used for LED dimming and motor speed",
                "A serial communication protocol used to transmit pulse-coded data between chips"
              ]
            },
            {
              "id": 80,
              "text": "What is the difference between RISC and CISC architecture?",
              "options": [
                "CISC uses a small set of simple, fixed-length instructions executing in one clock cycle",
                "RISC and CISC refer to the same instruction set design philosophy",
                "RISC uses a small set of simple, fixed-length instructions favoring speed and pipelining; CISC uses a larger set of complex, variable-length instructions performing multi-step operations",
                "RISC instructions are always variable-length, while CISC instructions are fixed-length"
              ]
            }
          ]
        }
      ]
    },
    "junior": {
      "label": "Junior (1–3 Years)",
      "desc": "1 to 3 years of experience",
      "mcqCount": 100,
      "codingCount": 2,
      "durationMinutes": 130,
      "modules": [
        {
          "name": "C",
          "type": "mcq",
          "questions": [
            {
              "id": 81,
              "text": "What is the difference between const and volatile?",
              "options": [
                "const allows hardware to modify values freely; volatile prevents modification",
                "volatile means value cannot change; const forces re-reading from memory",
                "Both keywords are interchangeable and only affect linkage",
                "const means the value cannot be modified after initialization; volatile forces re-reading from memory every time since value may change unexpectedly"
              ]
            },
            {
              "id": 82,
              "text": "When should the volatile keyword be used?",
              "options": [
                "For variables passed by value into functions",
                "For loop counters to speed up execution",
                "For hardware registers, ISR-modified variables, or variables shared between threads, to prevent unwanted compiler optimization",
                "For constants defined with #define to enable macro expansion"
              ]
            },
            {
              "id": 83,
              "text": "What is a memory leak and how can it be avoided?",
              "options": [
                "When a pointer is dereferenced before initialization, avoided using volatile",
                "When dynamically allocated memory is never freed, avoided by pairing malloc/calloc with free() and using tools like Valgrind",
                "When stack memory overflows due to deep recursion, avoided by increasing heap size",
                "When two pointers point to the same memory address, avoided using deep copy"
              ]
            },
            {
              "id": 84,
              "text": "What is the difference between shallow copy and deep copy of a structure?",
              "options": [
                "Shallow copy allocates new memory for each member; deep copy shares pointers between structures",
                "Shallow and deep copy differ only in execution speed, not memory behavior",
                "Shallow copy only works with static variables; deep copy only works with dynamic ones",
                "Shallow copy copies pointer values so both structures share the same memory; deep copy allocates new memory and copies actual data"
              ]
            },
            {
              "id": 85,
              "text": "What is a function pointer?",
              "options": [
                "A pointer that can only point to global variables",
                "A reserved keyword for declaring inline functions",
                "A variable that stores the address of a function, enabling indirect calls, callbacks, and dispatch tables",
                "A pointer used exclusively for recursive function calls"
              ]
            },
            {
              "id": 86,
              "text": "What is the use of the static keyword for functions?",
              "options": [
                "Restricts a function to internal linkage, making it visible only within its defining file",
                "Allows a function to be called only once during program execution",
                "Forces the function to always be inlined by the compiler",
                "Makes the function accessible across all files without an extern declaration"
              ]
            },
            {
              "id": 87,
              "text": "What is a bit-field in a structure?",
              "options": [
                "A structure member declared with a fixed pointer size for hardware access",
                "A special array type used to store binary strings",
                "A structure member specifying an exact number of bits it occupies, useful for packing data and mapping hardware registers",
                "A keyword that forces structure members to be byte-aligned"
              ]
            },
            {
              "id": 88,
              "text": "What is the difference between an array of pointers and a pointer to an array?",
              "options": [
                "Array of pointers is a collection of pointers each pointing to an element; pointer to array is a single pointer pointing to an entire array",
                "Array of pointers and pointer to array are syntactically identical in C",
                "Pointer to array holds multiple addresses; array of pointers holds only one address",
                "Array of pointers is used only for strings; pointer to array is used only for integers"
              ]
            },
            {
              "id": 89,
              "text": "What is memory alignment/padding in structures?",
              "options": [
                "Padding removes unused memory to shrink structure size regardless of member types",
                "Padding is added only when using bit-fields in a structure",
                "Alignment is irrelevant on modern CPUs and only affects legacy hardware",
                "Compilers add padding bytes so each member aligns to a boundary matching its size, improving access speed but possibly increasing structure size"
              ]
            },
            {
              "id": 90,
              "text": "How is the volatile qualifier used for hardware register access?",
              "options": [
                "A hardware register should be declared as a const pointer so its address cannot change",
                "A hardware register should use a regular pointer since compilers always re-read memory",
                "A hardware register should be declared as a volatile pointer to ensure the compiler generates a fresh read/write instruction each time instead of caching",
                "A hardware register should be declared static to prevent multiple files from accessing it"
              ]
            },
            {
              "id": 91,
              "text": "What is a dangling pointer?",
              "options": [
                "A pointer that has never been assigned a value",
                "A pointer pointing to freed or out-of-scope memory; dereferencing it is undefined behavior, should be set to NULL after freeing",
                "A pointer that automatically updates when the pointed-to variable changes scope",
                "A pointer used only in recursive linked list traversal"
              ]
            },
            {
              "id": 92,
              "text": "What is the difference between stack and heap memory?",
              "options": [
                "Stack memory is dynamically allocated with malloc; heap memory is used for local variables",
                "Stack and heap are the same memory region, differing only in naming convention",
                "Heap memory is limited and automatically freed; stack memory is manually managed by the programmer",
                "Stack memory is for static/automatic allocation and is automatically managed (LIFO); heap memory is for dynamic allocation and must be manually managed"
              ]
            },
            {
              "id": 93,
              "text": "What is the difference between macros and inline functions?",
              "options": [
                "Macros are type-checked by the compiler; inline functions are handled by the preprocessor",
                "Macros and inline functions behave identically in all cases",
                "Macros are textual substitutions by the preprocessor with no type checking; inline functions are compiler-handled, type-checked, and safer",
                "Inline functions always execute faster than macros because they skip compilation"
              ]
            },
            {
              "id": 94,
              "text": "What is the overhead of recursion compared to iteration?",
              "options": [
                "Recursion uses constant stack space like iteration, so there is no real overhead",
                "Each recursive call consumes stack memory for locals/return address, causing higher time/space overhead and risk of stack overflow compared to iteration",
                "Recursion is always faster than iteration because it avoids loop condition checks",
                "Recursion overhead only applies to functions that return void"
              ]
            },
            {
              "id": 95,
              "text": "What is the use of the extern keyword across multiple files?",
              "options": [
                "extern forces a variable to be reallocated in every file that includes it",
                "extern is used to make a function's linkage internal to a single file",
                "extern is required for all global variable declarations, even within the same file",
                "extern declares that a variable/function is defined elsewhere, allowing sharing across files while the actual definition exists in only one file"
              ]
            },
            {
              "id": 96,
              "text": "How are function pointers used to implement callbacks?",
              "options": [
                "A function pointer is passed to another function which invokes it later, enabling flexible, configurable behavior like in qsort()",
                "Callbacks require using extern to link functions across files",
                "A function pointer can only invoke functions defined in the same scope, preventing true callback behavior",
                "Callback functions must be declared static to be passed as pointers"
              ]
            },
            {
              "id": 97,
              "text": "What is a circular buffer and how is it implemented?",
              "options": [
                "A buffer that automatically expands in size when it reaches capacity",
                "A fixed-size buffer that wraps around using head/tail indices modulo buffer size, common in UART/DMA buffering",
                "A buffer that always drops the oldest data by deleting rather than overwriting",
                "A buffer implemented only using a linked list structure with no fixed indices"
              ]
            },
            {
              "id": 98,
              "text": "What is endianness? Differentiate big-endian and little-endian.",
              "options": [
                "Big-endian stores the least significant byte first; little-endian stores the most significant byte first",
                "Endianness only matters for floating-point numbers, not integers",
                "Big-endian stores the most significant byte at the lowest address; little-endian stores the least significant byte at the lowest address",
                "Endianness defines bit order within a byte, not byte order in memory"
              ]
            },
            {
              "id": 99,
              "text": "What is the difference between passing an array and passing a pointer to a function in C?",
              "options": [
                "Passing an array copies the entire array's contents onto the function's stack frame",
                "A passed array decays into a pointer to its first element, so sizeof() cannot determine array size inside the function without being told explicitly",
                "Passing an array and passing a pointer are functionally different operations at the machine code level",
                "Arrays passed to functions retain their size information via a hidden length parameter"
              ]
            },
            {
              "id": 100,
              "text": "What is the difference between #include <file.h> and #include \"file.h\"?",
              "options": [
                "Angle brackets search the current directory first; quotes search system directories first",
                "Angle brackets and quotes behave identically in standard C",
                "Angle brackets search standard system directories first; quotes search the current directory first, then fall back to system directories",
                "Quotes are used only for C++ headers, angle brackets only for C headers"
              ]
            }
          ]
        },
        {
          "name": "C++",
          "type": "mcq",
          "questions": [
            {
              "id": 101,
              "text": "What is a virtual destructor and why is it needed?",
              "options": [
                "Ensures derived class destructor runs first when deleting via base pointer, preventing resource leaks in polymorphic classes",
                "Prevents any destructor from being called automatically",
                "Is required only for classes with no member variables",
                "Makes a class's constructor callable virtually at runtime"
              ]
            },
            {
              "id": 102,
              "text": "What is multiple inheritance and the diamond problem?",
              "options": [
                "Diamond problem occurs when a class inherits from itself indirectly, resolved using static members",
                "Multiple inheritance is banned in C++ due to the diamond problem",
                "Diamond problem arises when two base classes share a common ancestor causing ambiguity, resolved using virtual inheritance",
                "Diamond problem only affects single inheritance hierarchies"
              ]
            },
            {
              "id": 103,
              "text": "What is a pure virtual function and an abstract class?",
              "options": [
                "A pure virtual function has a default implementation that derived classes may skip",
                "Pure virtual functions are only allowed in template classes",
                "An abstract class can be instantiated but not inherited from",
                "A pure virtual function is declared with '= 0' forcing derived classes to override it; a class with one becomes abstract and cannot be instantiated"
              ]
            },
            {
              "id": 104,
              "text": "What are templates in C++?",
              "options": [
                "Templates allow generic, type-independent code where the actual type is specified at compile time",
                "Templates are runtime polymorphism mechanisms similar to virtual functions",
                "Templates only work with built-in numeric types like int and float",
                "Templates require dynamic memory allocation to function correctly"
              ]
            },
            {
              "id": 105,
              "text": "What is the STL (Standard Template Library)?",
              "options": [
                "A library exclusively for string manipulation and formatting",
                "A collection of generic template containers, algorithms, and iterators like vector, map, sort, and find",
                "A set of macros used to simplify pointer arithmetic",
                "A runtime library that replaces the need for classes in C++"
              ]
            },
            {
              "id": 106,
              "text": "What is the difference between vector and array in C++?",
              "options": [
                "Vector has a fixed size like array but adds bounds checking",
                "Array is dynamically resizable while vector has a fixed compile-time size",
                "Vector is a dynamic, resizable STL container with bounds-checked access via .at(); array has a fixed size and no built-in resizing",
                "Vector and array are identical except for naming conventions"
              ]
            },
            {
              "id": 107,
              "text": "What is exception handling in C++?",
              "options": [
                "Exception handling uses try, throw, and catch to manage runtime errors gracefully instead of abrupt termination",
                "Exception handling is done using #ifdef and #endif preprocessor directives",
                "Exceptions in C++ can only be caught within the same function that throws them",
                "try and catch blocks are used only for compile-time error detection"
              ]
            },
            {
              "id": 108,
              "text": "How are the << and >> operators overloaded for custom classes?",
              "options": [
                "These operators can only be overloaded as member functions, never as friend functions",
                "Overloading these operators requires modifying the standard library headers",
                "These operators are automatically overloaded by the compiler for every class",
                "Overloaded as non-member (often friend) functions taking a stream and object reference, enabling direct use with cout/cin"
              ]
            },
            {
              "id": 109,
              "text": "What is a copy constructor?",
              "options": [
                "A constructor that always allocates memory on the heap regardless of data type",
                "A function used to destroy objects after they go out of scope",
                "A constructor that initializes a new object as a copy of an existing one, invoked during pass-byvalue or return-by-value; must be defined explicitly for deep copies",
                "A special member function that can only be called manually, never automatically"
              ]
            },
            {
              "id": 110,
              "text": "What is the Rule of Three/Five in C++?",
              "options": [
                "States a class should never define its own destructor, copy constructor, or copy assignment",
                "Applies only to classes with static members",
                "Requires exactly three constructors per class for proper object initialization",
                "If a class defines destructor, copy constructor, or copy assignment, it should define all three; C++11 extends this to five with move constructor/assignment"
              ]
            },
            {
              "id": 111,
              "text": "What is the difference between shallow copy and deep copy in C++?",
              "options": [
                "Default copy constructor performs a shallow copy (shared pointers); manual deep copy allocates separate memory for independent data",
                "Default copy constructor always performs a deep copy automatically",
                "Shallow copy is only possible using the 'explicit' keyword",
                "Deep copy and shallow copy produce identical memory layouts"
              ]
            },
            {
              "id": 112,
              "text": "What are static members and static member functions in a class?",
              "options": [
                "Static members create a separate copy for every object instance",
                "Static member functions can access both static and non-static members freely",
                "A static member is shared by all objects (one copy exists); a static member function can access only static members and is callable without an object",
                "Static members can only be declared inside constructors"
              ]
            },
            {
              "id": 113,
              "text": "What is a smart pointer in C++?",
              "options": [
                "A raw pointer that must be manually deleted like any other pointer",
                "A pointer type used only for arrays, not single objects",
                "A pointer that can only be used within template functions",
                "A class template that wraps a raw pointer and automatically manages its lifetime, calling delete when out of scope (e.g., unique_ptr, shared_ptr)"
              ]
            },
            {
              "id": 114,
              "text": "What is the difference between unique_ptr and shared_ptr?",
              "options": [
                "unique_ptr allows shared ownership via reference counting; shared_ptr provides exclusive ownership",
                "unique_ptr provides exclusive ownership and cannot be copied, only moved; shared_ptr allows shared ownership via reference counting",
                "unique_ptr and shared_ptr are functionally identical, differing only in name",
                "shared_ptr cannot be used with dynamically allocated arrays under any circumstance"
              ]
            },
            {
              "id": 115,
              "text": "What is RAII (Resource Acquisition Is Initialization)?",
              "options": [
                "A technique for reallocating memory automatically during runtime errors",
                "A design pattern exclusive to multithreaded programs",
                "An idiom tying resource management to object lifetime — resources acquired in constructor, released in destructor for automatic, exception-safe cleanup",
                "A method for renaming class members at compile time"
              ]
            },
            {
              "id": 116,
              "text": "What is the difference between function overloading and function overriding?",
              "options": [
                "Both overloading and overriding are resolved at runtime using dynamic binding",
                "Overloading is same-name functions with different parameters resolved at compile time; overriding redefines a base virtual function in a derived class, resolved at runtime",
                "Overloading redefines base class functions; overriding creates multiple functions with different parameter lists",
                "Overriding requires functions to have different names in derived and base classes"
              ]
            },
            {
              "id": 117,
              "text": "What is a const member function?",
              "options": [
                "A member function that guarantees not to modify non-mutable member variables and can be called on const objects",
                "A function that can modify any member variable as long as it returns a const value",
                "A function declared with const before the function name, forcing it to return a constant",
                "A member function that can only be called from outside the class"
              ]
            },
            {
              "id": 118,
              "text": "What is name mangling in C++?",
              "options": [
                "A compiler process encoding parameter types, namespace, and class info into a function's symbol name to support overloading; requires extern \"C\" for C interop",
                "A runtime process that renames variables to prevent memory corruption",
                "A process unique to C compilers, not used in C++",
                "A linker-only process that has no relation to function overloading"
              ]
            },
            {
              "id": 119,
              "text": "What is the difference between early binding and late binding?",
              "options": [
                "Early binding resolves calls at runtime; late binding resolves calls at compile time",
                "Both early and late binding occur simultaneously during compilation",
                "Early (static) binding resolves calls at compile time for normal/overloaded functions; late (dynamic) binding resolves virtual function calls at runtime",
                "Late binding is used exclusively for non-virtual member functions"
              ]
            },
            {
              "id": 120,
              "text": "What is the use of the explicit keyword?",
              "options": [
                "Forces a constructor to always perform implicit type conversions",
                "Marks a function as inline to improve performance",
                "Applied to single-argument constructors to prevent the compiler from using them for implicit type conversions",
                "Is required for all constructors that take more than one argument"
              ]
            }
          ]
        },
        {
          "name": "Digital Electronics",
          "type": "mcq",
          "questions": [
            {
              "id": 121,
              "text": "What is setup time and hold time?",
              "options": [
                "Setup time is after the clock edge; hold time is before the clock edge",
                "Setup time is the minimum time data must be stable before the clock edge; hold time is the minimum time after, violating either can cause metastability",
                "Setup and hold time apply only to combinational logic, not flip-flops",
                "Setup time refers to power-up delay; hold time refers to reset duration"
              ]
            },
            {
              "id": 122,
              "text": "What is metastability?",
              "options": [
                "A permanent stuck-at fault caused by manufacturing defects",
                "A condition where a flip-flop output toggles at twice the clock frequency",
                "A design technique used to synchronize multiple clock domains safely",
                "An unstable, unpredictable output state entered when setup/hold time is violated, taking indeterminate time to settle to a valid level"
              ]
            },
            {
              "id": 123,
              "text": "What is the difference between a Mealy machine and a Moore machine?",
              "options": [
                "Mealy machine output depends only on current state; Moore machine output depends on state and input",
                "In Mealy machine, output depends on current state and input (can change asynchronously); in Moore machine, output depends only on current state",
                "Mealy and Moore machines are identical except for the number of states used",
                "Moore machines cannot be implemented using flip-flops"
              ]
            },
            {
              "id": 124,
              "text": "What is a race condition in digital circuits?",
              "options": [
                "A condition where two signals change simultaneously and output depends on relative propagation timing, leading to unpredictable results",
                "A condition caused only by clock frequency being too low",
                "A permanent short circuit between power and ground rails",
                "A condition where only synchronous circuits can experience timing issues"
              ]
            },
            {
              "id": 125,
              "text": "What is a tri-state buffer?",
              "options": [
                "A buffer with only two output states: logic 0 and logic 1",
                "A buffer that amplifies signal strength for long bus lines",
                "A buffer with logic 0, logic 1, and high-impedance states controlled by an enable signal, allowing shared bus access",
                "A buffer used exclusively for clock signal distribution"
              ]
            },
            {
              "id": 126,
              "text": "What are the steps to design a Finite State Machine (FSM)?",
              "options": [
                "Only requires writing Boolean equations directly without a state diagram",
                "FSM design begins with hardware implementation before defining the problem",
                "FSM design steps apply only to Moore machines, not Mealy machines",
                "Define states, draw state diagram, create transition table, assign codes, derive equations, implement with flip-flops/gates"
              ]
            },
            {
              "id": 127,
              "text": "What is a glitch and how can it be avoided?",
              "options": [
                "A permanent logic error caused by incorrect gate wiring",
                "A momentary unwanted transition caused by differing propagation delays (a hazard), reduced via redundant logic terms or synchronous design",
                "A glitch only occurs in memory circuits, never in combinational logic",
                "A deliberate signal used to trigger interrupts in digital systems"
              ]
            },
            {
              "id": 128,
              "text": "What is the difference between synchronous and asynchronous reset?",
              "options": [
                "Synchronous reset takes effect immediately regardless of clock; asynchronous reset only on the clock edge",
                "Both reset types behave identically in modern FPGA design",
                "Asynchronous reset requires a clock signal to function at all",
                "Synchronous reset takes effect only on the active clock edge; asynchronous reset takes effect immediately regardless of clock, useful for guaranteed initialization"
              ]
            },
            {
              "id": 129,
              "text": "What is a PLL (Phase-Locked Loop)?",
              "options": [
                "A logic gate array used for programmable combinational logic",
                "A memory device used to store clock configuration bits",
                "A control system generating an output signal phase-locked to a reference input, used to generate stable higher-frequency clocks",
                "A protection circuit that isolates power supply noise from logic circuits"
              ]
            },
            {
              "id": 130,
              "text": "What is the difference between clock skew and clock jitter?",
              "options": [
                "Clock skew is temporal variation of clock edges over cycles; jitter is spatial difference between components",
                "Clock skew is the spatial difference in arrival time of the same clock edge at different points; jitter is the temporal variation of the clock edge over cycles",
                "Skew and jitter are two names for the same timing phenomenon",
                "Clock skew only occurs in asynchronous circuits; jitter only in synchronous circuits"
              ]
            },
            {
              "id": 131,
              "text": "What is fan-in and fan-out?",
              "options": [
                "Fan-in is the max number of outputs a gate can drive; fan-out is the number of inputs it accepts",
                "Fan-in and fan-out both refer to power consumption limits of a gate",
                "Fan-out determines the propagation delay of a single gate only",
                "Fan-in is the number of inputs a gate accepts; fan-out is the max number of gate inputs its output can reliably drive"
              ]
            },
            {
              "id": 132,
              "text": "What is noise margin?",
              "options": [
                "The maximum operating frequency a logic gate can sustain without failure",
                "The maximum noise voltage that can be added to a signal without causing a logic-level interpretation error, based on output/input voltage thresholds",
                "The margin of error allowed in a chip's manufacturing tolerance",
                "A measure of power supply ripple in digital circuits"
              ]
            },
            {
              "id": 133,
              "text": "What is a Schmitt trigger?",
              "options": [
                "A comparator with hysteresis using two threshold voltages, converting noisy/slow signals to clean digital signals, used for debouncing",
                "A trigger circuit that generates a single fixed threshold voltage for all transitions",
                "A flip-flop variant used only for edge-triggered counters",
                "A circuit used exclusively for analog-to-digital conversion"
              ]
            },
            {
              "id": 134,
              "text": "What is the difference between CMOS and TTL logic families?",
              "options": [
                "CMOS uses bipolar transistors with high power consumption; TTL uses MOSFETs with low power consumption",
                "CMOS and TTL have identical voltage thresholds and require no level shifting",
                "CMOS uses complementary MOSFETs with low static power and high noise immunity; TTL uses bipolar transistors, consumes more power, has lower noise immunity",
                "TTL logic is used exclusively in modern FPGA designs due to low power"
              ]
            },
            {
              "id": 135,
              "text": "What is switch/contact debouncing and why is it needed?",
              "options": [
                "A technique to increase switch contact speed using higher voltage",
                "Filtering out spurious rapid on/off transitions from mechanical switch bounce using hardware or software techniques, ensuring a single clean transition",
                "A method for encrypting switch input signals for security",
                "A process that only applies to capacitive touch switches, not mechanical ones"
              ]
            },
            {
              "id": 136,
              "text": "How can a multiplexer be used to implement a Boolean function?",
              "options": [
                "A 2^n:1 mux can implement any function of n+1 variables by connecting n variables to select lines and setting data inputs per the truth table",
                "Multiplexers can only implement functions with exactly two input variables",
                "A mux implements Boolean functions by replacing all AND/OR gates with NOT gates",
                "Multiplexers cannot be used to implement Boolean logic without additional external gates"
              ]
            },
            {
              "id": 137,
              "text": "What is Gray code and why is it used?",
              "options": [
                "A code where two successive values differ in exactly one bit, used in rotary encoders and K-maps to prevent transition glitches",
                "A binary code where all bits change simultaneously between successive values",
                "Gray code is used exclusively for error-correcting memory systems",
                "A code representing negative numbers using two's complement"
              ]
            },
            {
              "id": 138,
              "text": "What is a setup/hold time violation and how is it analyzed?",
              "options": [
                "Analyzed only through physical oscilloscope measurement, never via simulation",
                "Setup/hold violations only occur in asynchronous FIFOs",
                "Violations are fixed exclusively by increasing the supply voltage",
                "Occurs when data isn't stable for required setup/hold windows around the clock edge, analyzed via static timing analysis (STA) checking data arrival against constraints"
              ]
            },
            {
              "id": 139,
              "text": "What is the basic difference between PLD, CPLD, and FPGA?",
              "options": [
                "PLD is the most complex device; FPGA is the simplest with fixed logic",
                "CPLD is volatile and needs reconfiguration on power-up; FPGA is non-volatile",
                "PLD is a simple chip for basic logic; CPLD has multiple PLD-like blocks with non-volatile config; FPGA has a large configurable array and is volatile",
                "PLD, CPLD, and FPGA are all functionally identical, differing only in package size"
              ]
            },
            {
              "id": 140,
              "text": "What is bus contention?",
              "options": [
                "Occurs when multiple enabled output drivers on a shared bus try to drive different logic levels simultaneously, avoided using tri-state buffers and arbitration",
                "A condition that only occurs when a bus has no pull-up resistors installed",
                "A synonym for clock skew in multi-component systems",
                "Bus contention refers to insufficient bus bandwidth during high-speed transfers"
              ]
            }
          ]
        },
        {
          "name": "Microcontroller (Peripherals)",
          "type": "mcq",
          "questions": [
            {
              "id": 141,
              "text": "GPIO: How is a pin configured as an input with an internal pull-up?",
              "options": [
                "The direction register bit is set to 1 for input, and pull-down is enabled by default",
                "Pull-up configuration requires setting the pin to output mode first",
                "GPIO pull-up is enabled automatically by hardware reset with no register configuration needed",
                "The pin's direction register bit is cleared for input, and the pull-up enable bit/register is set, so pin reads HIGH by default"
              ]
            },
            {
              "id": 142,
              "text": "GPIO: What is the difference between open-drain and push-pull output configuration?",
              "options": [
                "Push-pull can only drive LOW; open-drain can only drive HIGH",
                "Open-drain and push-pull are identical except for power consumption",
                "Push-pull actively drives both HIGH and LOW; open-drain can only actively drive LOW, needing an external pull-up for HIGH, common in I2C",
                "Push-pull requires an external pull-up resistor to function; open-drain does not"
              ]
            },
            {
              "id": 143,
              "text": "Timer: What is the difference between timer mode and input capture mode?",
              "options": [
                "In timer mode, the counter increments with the clock to measure time; in input capture mode, the counter value is latched on an external event to measure pulse width/frequency",
                "Timer mode is used only for PWM generation, not time measurement",
                "Input capture mode increments the counter with the internal clock; timer mode latches values on external events",
                "Timer mode and input capture mode both require external triggering to function"
              ]
            },
            {
              "id": 144,
              "text": "Timer: What is a prescaler?",
              "options": [
                "A register that increases the timer's clock frequency to improve resolution",
                "A divider placed before the timer's counting logic that divides the input clock, allowing slower counting and longer time intervals",
                "A prescaler resets the timer counter to zero on every clock cycle",
                "A prescaler is used only in ADC peripherals, not timers"
              ]
            },
            {
              "id": 145,
              "text": "UART: What is baud rate and what happens on a mismatch?",
              "options": [
                "The number of parity bits transmitted per data frame",
                "A fixed hardware constant that cannot be configured by software",
                "The voltage level used to represent a logic 1 in UART communication",
                "The rate of signal changes/bits per second over UART, which must match on both devices; mismatch causes wrong sampling and corrupted data"
              ]
            },
            {
              "id": 146,
              "text": "UART: What are start, stop, and parity bits?",
              "options": [
                "Start bit is always 1, stop bit is always 0, marking frame boundaries",
                "Parity bit is mandatory and always set to detect two-bit errors",
                "Start bit (0) signals frame beginning, stop bit (1) signals frame end, parity bit is an optional errordetection bit",
                "Start and stop bits are used only in SPI communication, not UART"
              ]
            },
            {
              "id": 147,
              "text": "SPI: Explain SPI modes 0, 1, 2, and 3 (CPOL/CPHA).",
              "options": [
                "SPI modes are defined by baud rate and parity settings, not clock polarity/phase",
                "SPI modes are defined by CPOL (clock idle polarity) and CPHA (edge for sampling data); master and slave must match modes",
                "All four SPI modes are functionally interchangeable regardless of device configuration",
                "CPOL determines data direction (MOSI/MISO), while CPHA determines clock speed"
              ]
            },
            {
              "id": 148,
              "text": "SPI: How does full-duplex operation work in SPI?",
              "options": [
                "SPI achieves full-duplex using separate MOSI and MISO lines with a shared clock, transmitting and receiving simultaneously",
                "SPI uses a single shared data line for both transmit and receive, alternating direction each clock cycle",
                "Full-duplex SPI requires two separate clock lines, one for each direction",
                "SPI is inherently half-duplex and cannot achieve true full-duplex operation"
              ]
            },
            {
              "id": 149,
              "text": "I2C: Explain the start/stop condition and ACK/NACK.",
              "options": [
                "Start condition is SDA LOW-to-HIGH while SCL is LOW; stop is the reverse",
                "ACK is signaled by releasing SDA HIGH; NACK is signaled by pulling SDA LOW",
                "Start condition is SDA HIGH-to-LOW while SCL is HIGH; stop is SDA LOW-to-HIGH while SCL is HIGH; ACK is SDA pulled LOW by receiver, NACK leaves it HIGH",
                "I2C does not use start/stop conditions, only continuous clock pulses"
              ]
            },
            {
              "id": 150,
              "text": "I2C: What is clock stretching?",
              "options": [
                "A master technique to speed up a slow slave device by increasing SCL frequency",
                "A method where the master holds SDA LOW indefinitely to reset the bus",
                "Clock stretching only applies to SPI, not I2C",
                "A slave holding SCL LOW to pause the transaction, giving it more time to process before continuing"
              ]
            },
            {
              "id": 151,
              "text": "ADC: What is resolution and reference voltage?",
              "options": [
                "Resolution is the number of discrete output levels (e.g., 10-bit = 1024 levels); reference voltage defines the input range mapped to full-scale output",
                "Resolution is the sampling frequency in Hz; reference voltage is the ADC's clock source",
                "Reference voltage determines the ADC's resolution automatically without configuration",
                "Resolution and reference voltage are unrelated to measurement accuracy"
              ]
            },
            {
              "id": 152,
              "text": "ADC: Explain sampling rate and the Nyquist criterion.",
              "options": [
                "Nyquist criterion requires sampling rate to be at least twice the highest input frequency component to avoid aliasing",
                "Nyquist criterion requires sampling rate to equal the input signal's frequency exactly",
                "Sampling rate has no relationship to signal reconstruction accuracy",
                "Nyquist criterion applies only to digital-to-analog conversion, not ADC"
              ]
            },
            {
              "id": 153,
              "text": "PWM: How is duty cycle and frequency calculated from timer registers?",
              "options": [
                "Frequency depends only on the compare register; duty cycle depends only on the prescaler",
                "Duty cycle is fixed by hardware and cannot be changed via registers",
                "PWM frequency is determined solely by the ADC reference voltage",
                "PWM frequency = Timer Clock / (Prescaler x Period); duty cycle is the ratio of compare/match register to period register"
              ]
            },
            {
              "id": 154,
              "text": "PWM: How is PWM used in motor speed control?",
              "options": [
                "PWM switches supply voltage on/off; average power is proportional to duty cycle, so higher duty cycle increases effective motor speed",
                "PWM requires a separate analog voltage source and does not use duty cycle",
                "Motor speed is controlled by varying PWM frequency alone, independent of duty cycle",
                "PWM can only be used for LED brightness control, not motor speed"
              ]
            },
            {
              "id": 155,
              "text": "Interrupt: What is interrupt priority and nested interrupts?",
              "options": [
                "Interrupt priority only applies to software interrupts, not hardware ones",
                "All interrupts execute in the order they occur, regardless of priority",
                "Determines which ISR executes first and whether higher-priority interrupts can preempt a running lower-priority ISR, essential for real-time deadlines",
                "Nested interrupts are disabled by default and cannot be configured"
              ]
            },
            {
              "id": 156,
              "text": "Interrupt: What is ISR latency?",
              "options": [
                "The time delay between an interrupt event and the ISR actually beginning execution, affected by masking, higher-priority interrupts, and context-saving overhead",
                "The total execution time of an ISR from start to finish",
                "The time it takes for a peripheral to generate an interrupt signal",
                "ISR latency is fixed and cannot be affected by interrupt priority settings"
              ]
            },
            {
              "id": 157,
              "text": "Watchdog: What is the difference between an independent and windowed watchdog?",
              "options": [
                "Independent watchdog requires feeding within a specific window; windowed watchdog resets only on its own separate clock",
                "Both watchdog types behave identically except for naming",
                "Windowed watchdog cannot trigger a reset if fed too early",
                "Independent watchdog (IWDG) resets if not fed within a timeout on its own clock; windowed watchdog (WWDG) requires feeding within a specific time window, catching timing faults"
              ]
            },
            {
              "id": 158,
              "text": "DMA: What is DMA and why is it used?",
              "options": [
                "A peripheral that transfers data directly between memory and peripherals without CPU intervention per byte, freeing CPU and improving throughput",
                "DMA requires the CPU to manually copy each byte, offering no performance benefit",
                "DMA is used only for transferring data between two peripherals, never involving memory",
                "DMA transfers are always slower than CPU-driven transfers due to added overhead"
              ]
            },
            {
              "id": 159,
              "text": "DMA: What is the difference between memory-to-memory and peripheral-to-memory DMA transfer?",
              "options": [
                "Memory-to-memory DMA requires peripheral triggering; peripheral-to-memory does not",
                "Both DMA types require CPU intervention for every transfer",
                "Peripheral-to-memory DMA is used only for memory buffer copying",
                "Memory-to-memory DMA copies data directly between two memory locations; peripheral-tomemory DMA moves data between a peripheral's register and memory, often triggered by peripheral events"
              ]
            },
            {
              "id": 160,
              "text": "What is the difference between memory-mapped I/O and port-mapped I/O?",
              "options": [
                "Memory-mapped I/O uses dedicated IN/OUT instructions; port-mapped I/O uses normal load/store",
                "Port-mapped I/O maps peripherals into the same address space as memory",
                "Memory-mapped I/O maps peripheral registers into the same address space as memory, accessed via normal load/store; port-mapped I/O uses a separate address space via dedicated instructions",
                "Memory-mapped and port-mapped I/O are functionally identical in all architectures"
              ]
            }
          ]
        },
        {
          "name": "RTOS",
          "type": "mcq",
          "questions": [
            {
              "id": 161,
              "text": "What is an RTOS?",
              "options": [
                "An OS designed to maximize average throughput without timing guarantees",
                "An operating system used exclusively for desktop and server applications",
                "A lightweight OS that has no task scheduler at all",
                "An OS designed to process data and respond to events within strict, predictable time constraints, providing deterministic scheduling"
              ]
            },
            {
              "id": 162,
              "text": "What is the difference between an RTOS and a general-purpose OS?",
              "options": [
                "RTOS prioritizes fairness and throughput; general-purpose OS guarantees deterministic response times",
                "RTOS guarantees deterministic response times using a small efficient kernel; general-purpose OS prioritizes throughput and fairness with no hard timing guarantees",
                "RTOS and general-purpose OS are functionally identical in scheduling behavior",
                "General-purpose OS is always faster than RTOS for real-time tasks"
              ]
            },
            {
              "id": 163,
              "text": "What is a task/thread in RTOS?",
              "options": [
                "An independent, schedulable unit of execution with its own stack, priority, and state, managed by the RTOS scheduler",
                "A fixed block of memory reserved at compile time for interrupt handling",
                "A task refers only to the main() function in an RTOS application",
                "Threads in RTOS share a single combined stack across all tasks"
              ]
            },
            {
              "id": 164,
              "text": "What is the difference between preemptive and cooperative scheduling?",
              "options": [
                "In preemptive scheduling, tasks must voluntarily yield; in cooperative scheduling, the scheduler forcibly suspends tasks",
                "Preemptive and cooperative scheduling are identical in real-time guarantees",
                "Preemptive scheduling allows the scheduler to forcibly suspend a running task for a higherpriority one; cooperative scheduling requires a task to voluntarily yield control",
                "Cooperative scheduling always uses more CPU overhead than preemptive scheduling"
              ]
            },
            {
              "id": 165,
              "text": "What is a semaphore?",
              "options": [
                "A synchronization primitive with a counter controlling access to shared resources; binary semaphore signals between tasks/ISRs, counting semaphore manages multiple resources",
                "A hardware register used only for GPIO pin locking",
                "A semaphore always has ownership tied to the task that created it",
                "Semaphores are used exclusively for memory allocation in RTOS"
              ]
            },
            {
              "id": 166,
              "text": "What is the difference between a mutex and a semaphore?",
              "options": [
                "A mutex has no ownership concept; a semaphore always requires ownership by the locking task",
                "Mutex and semaphore are interchangeable terms with no functional difference",
                "A semaphore can only be used within a single task, never across tasks",
                "A mutex is for mutual exclusion with ownership (only the locking task can unlock, supports priority inheritance); a semaphore is a general signaling mechanism without ownership"
              ]
            },
            {
              "id": 167,
              "text": "What is a message queue in RTOS?",
              "options": [
                "A mechanism allowing tasks/ISRs to send/receive data in FIFO order, enabling safe data exchange without shared-memory race conditions",
                "A queue used exclusively for storing task priorities",
                "Message queues require shared global variables to function",
                "A message queue only allows one-way communication from ISR to task"
              ]
            },
            {
              "id": 168,
              "text": "What is priority inversion?",
              "options": [
                "Occurs when a low-priority task is blocked by a high-priority task holding a resource",
                "Priority inversion only occurs in single-task RTOS systems",
                "A high-priority task is indirectly blocked because a low-priority task holds a needed resource while a medium-priority task preempts it, mitigated by priority inheritance",
                "Priority inversion is resolved by disabling all interrupts during task execution"
              ]
            },
            {
              "id": 169,
              "text": "What is context switching?",
              "options": [
                "The process of compiling task code at runtime for different priorities",
                "A permanent state change that occurs only once at system startup",
                "Saving the CPU state of a running task and restoring another task's saved state, allowing multiple tasks to share a single CPU",
                "Context switching only occurs when a mutex is released"
              ]
            },
            {
              "id": 170,
              "text": "What is a deadlock and how can it be avoided?",
              "options": [
                "Two or more tasks each wait indefinitely for a resource held by the other; avoided using consistent lock ordering, timeouts, or avoiding multiple simultaneous locks",
                "Occurs when a single task waits indefinitely for its own resource release",
                "Deadlock is avoided automatically by the RTOS scheduler without programmer intervention",
                "Deadlock only occurs in single-core processors, never in multi-core systems"
              ]
            }
          ]
        },
        {
          "name": "Linux",
          "type": "mcq",
          "questions": [
            {
              "id": 171,
              "text": "What does the 'ls' command do?",
              "options": [
                "Changes the current working directory to the specified path",
                "Displays the manual page for a given command",
                "Lists the contents (files and directories) of the current or specified directory",
                "Searches for a text pattern within files"
              ]
            },
            {
              "id": 172,
              "text": "What does the 'cd' command do?",
              "options": [
                "Navigates between directories, e.g., cd .. moves up one directory level",
                "Copies files from a source to a destination directory",
                "Displays the absolute path of the current directory",
                "Changes file permissions for a directory"
              ]
            },
            {
              "id": 173,
              "text": "What does the 'pwd' command do?",
              "options": [
                "Prints a list of currently running processes",
                "Prints the contents of a file to the terminal",
                "Changes the working directory to the user's home folder",
                "Displays the absolute path of the current working directory"
              ]
            },
            {
              "id": 174,
              "text": "What does the 'cp' command do?",
              "options": [
                "Moves or renames files and directories between locations",
                "Removes files or directories permanently",
                "Compares two files and prints their differences",
                "Copies files or directories from source to destination; cp -r copies directories recursively"
              ]
            },
            {
              "id": 175,
              "text": "What does the 'mv' command do?",
              "options": [
                "Moves or renames files/directories, e.g., renaming a file or relocating it to another directory",
                "Copies a file while preserving the original in its source location",
                "Merges the contents of two files into one",
                "Displays metadata about a file without modifying it"
              ]
            },
            {
              "id": 176,
              "text": "What does the 'rm' command do?",
              "options": [
                "Renames a file without deleting the original",
                "Restores a previously deleted file from a backup",
                "Removes (deletes) files; -r removes directories recursively, -f forces deletion without confirmation",
                "Reads and displays the contents of a file"
              ]
            },
            {
              "id": 177,
              "text": "What does the 'grep' command do?",
              "options": [
                "Changes file permissions based on a pattern match",
                "Groups files by extension for easier listing",
                "Replaces a pattern in a file with new text",
                "Searches for a specified pattern/text within files and prints matching lines"
              ]
            },
            {
              "id": 178,
              "text": "What does the 'chmod' command do?",
              "options": [
                "Changes the owner of a file or directory",
                "Changes file/directory permissions (read, write, execute) for owner, group, and others",
                "Compresses a file to reduce its size",
                "Displays the current permissions without modifying them"
              ]
            },
            {
              "id": 179,
              "text": "What does the 'ps' command do?",
              "options": [
                "Prints the current shell's environment variables",
                "Pauses a running script until user input is given",
                "Lists all installed packages on the system",
                "Displays information about currently running processes, e.g., PID, parent PID, command"
              ]
            },
            {
              "id": 180,
              "text": "What does the 'man' command do?",
              "options": [
                "Modifies file access permissions for all users",
                "Manages background processes and daemons",
                "Displays the manual/help documentation for a given command",
                "Merges multiple files into a single archive"
              ]
            }
          ]
        },
        {
          "name": "Coding",
          "type": "coding",
          "questions": [
            {
              "id": 181,
              "text": "Write a C program to reverse a singly linked list."
            },
            {
              "id": 182,
              "text": "Write a C program to swap two numbers without using a temporary variable."
            }
          ]
        }
      ]
    },
    "mid": {
      "label": "Mid-Level (3–5 Years)",
      "desc": "3 to 5 years of experience",
      "mcqCount": 107,
      "codingCount": 0,
      "durationMinutes": 107,
      "modules": [
        {
          "name": "C",
          "type": "mcq",
          "questions": [
            {
              "id": 183,
              "text": "Explain the memory layout of a C program.",
              "options": [
                "Text, Data, BSS, Heap, and Stack segments, with heap growing upward and stack growing downward",
                "Only Heap and Stack segments, with both growing in the same direction",
                "Text, Heap, and Stack segments only, with no separate area for global variables",
                "Data and BSS merged into a single read-write segment, with no separate code segment"
              ]
            },
            {
              "id": 184,
              "text": "Differentiate memory leak, memory corruption, and buffer overflow.",
              "options": [
                "They are three names for the same problem: unreleased heap memory",
                "Leak is unrecoverable memory; corruption is overflow; buffer overflow is a leak that occurs after program exit",
                "Leak is unreachable allocated memory; corruption is unintended modification; overflow is writing past buffer bounds (a form of corruption)",
                "Leak occurs only in the stack; corruption and overflow occur only in the heap"
              ]
            },
            {
              "id": 185,
              "text": "Explain how malloc() works internally.",
              "options": [
                "It always calls mmap() for every allocation regardless of size",
                "It pre-allocates the entire heap at program start and never contacts the OS again",
                "It directly maps hardware Flash addresses to variables",
                "It requests memory from the OS via brk()/sbrk() or mmap(), then manages a free list, splitting/coalescing blocks"
              ]
            },
            {
              "id": 186,
              "text": "What is a segmentation fault and what commonly causes it?",
              "options": [
                "A compiler warning about unused variables that halts compilation",
                "Illegal access to memory, commonly from NULL/dangling pointers, buffer overflows, or writing to read-only memory",
                "A runtime error caused only by integer division by zero",
                "A linker error caused by missing symbol definitions"
              ]
            },
            {
              "id": 187,
              "text": "Explain the use of function pointer arrays (jump tables) in embedded firmware.",
              "options": [
                "A table of variable addresses used to detect stack overflow",
                "A lookup table of interrupt priorities stored in Flash",
                "An array of function pointers indexed to directly dispatch to handler functions, replacing long ifelse/switch chains",
                "A compile-time macro that inlines all handler functions into one"
              ]
            },
            {
              "id": 188,
              "text": "How does volatile affect compiler optimization and instruction reordering?",
              "options": [
                "It forces the compiler to cache the variable in a register for faster repeated access",
                "It provides full memory barriers and atomic access guarantees on multi-core systems",
                "It only affects linker behavior, not compiler optimization",
                "It forces every access to go to actual memory and prevents reordering/elimination of accesses, without providing atomicity"
              ]
            },
            {
              "id": 189,
              "text": "How is a hardware register accessed using structure overlay in C?",
              "options": [
                "By declaring the register as a global array indexed by offset",
                "By overlaying a struct matching the register layout onto a fixed address via pointer cast",
                "By using a union of function pointers to represent each register",
                "By using dynamic memory allocation to reserve register space at runtime"
              ]
            },
            {
              "id": 190,
              "text": "What is the difference between reentrant and non-reentrant functions?",
              "options": [
                "Reentrant functions cannot be called from an ISR, non-reentrant functions can",
                "Reentrant functions use only local/stack state and can be safely re-entered; non-reentrant rely on unprotected shared state",
                "Reentrant functions run only once per program; non-reentrant can run multiple times",
                "There is no practical difference in embedded C programming"
              ]
            },
            {
              "id": 191,
              "text": "How can race conditions be prevented in C, especially in embedded code?",
              "options": [
                "By declaring all shared variables as const",
                "By always using global variables instead of local ones",
                "By disabling interrupts, using atomic operations, or mutexes/semaphores to serialize access to shared resources",
                "By increasing the compiler optimization level"
              ]
            },
            {
              "id": 192,
              "text": "How can stack overflow be detected in embedded systems?",
              "options": [
                "By monitoring heap fragmentation levels continuously",
                "By checking the CPU clock frequency against a threshold",
                "Using a canary pattern at the stack end, an MPU guard region, or RTOS stack high-water-mark features",
                "By counting the number of function calls made during execution"
              ]
            },
            {
              "id": 193,
              "text": "What is the difference between static and dynamic linking?",
              "options": [
                "Static linking happens at runtime; dynamic linking happens at compile time",
                "Static linking combines library code into the binary at compile time; dynamic linking links shared libraries at runtime",
                "Static linking only applies to embedded systems; dynamic linking only applies to desktop systems",
                "There is no difference in resulting binary size between the two"
              ]
            },
            {
              "id": 194,
              "text": "How does a linker script influence firmware memory placement?",
              "options": [
                "It only affects compiler warning verbosity, not memory placement",
                "It defines memory regions and controls exact placement of code/data sections like the vector table",
                "It is used exclusively to configure the RTOS scheduler",
                "It determines the runtime interrupt priority levels"
              ]
            },
            {
              "id": 195,
              "text": "What is undefined behavior in C? Give examples.",
              "options": [
                "Behavior that is always caught by the compiler at compile time",
                "Any runtime crash caused specifically by hardware faults only",
                "Code constructs with no standard-defined outcome, e.g. NULL dereference, signed overflow, outof-bounds access",
                "Behavior defined by the OS but not by the C standard"
              ]
            },
            {
              "id": 196,
              "text": "How are bitwise operators used to set, clear, and toggle a bit in a register?",
              "options": [
                "set reg&=(1<<n); clear reg|=(1<<n); toggle reg>>=n",
                "set reg|=(1<<n); clear reg&=~(1<<n); toggle reg^=(1<<n)",
                "set reg^=(1<<n); clear reg|=(1<<n); toggle reg&=(1<<n)",
                "set reg<<=n; clear reg>>=n; toggle reg%=n"
              ]
            },
            {
              "id": 197,
              "text": "What is the difference between signed and unsigned integer overflow behavior?",
              "options": [
                "Both signed and unsigned overflow are undefined behavior in C",
                "Unsigned overflow wraps around predictably; signed overflow is undefined behavior",
                "Signed overflow wraps around predictably; unsigned overflow is undefined behavior",
                "Both signed and unsigned overflow wrap around identically"
              ]
            },
            {
              "id": 198,
              "text": "How would you implement a simple memory pool allocator?",
              "options": [
                "By calling malloc() and free() repeatedly for each fixed-size chunk",
                "By pre-allocating a large block divided into equal chunks managed via a free list, giving O(1) alloc/free",
                "By reserving a new stack frame for each allocation request",
                "By using the OS virtual memory manager to page chunks in and out"
              ]
            },
            {
              "id": 199,
              "text": "What causes memory fragmentation and how can it be reduced?",
              "options": [
                "It's caused by using too many global variables; reduced by using more local variables",
                "It's caused by CPU cache misses; reduced by increasing clock speed",
                "Free memory broken into small non-contiguous blocks from varying-size alloc/free; reduced using fixed-size memory pools",
                "It's caused only by stack overflows; reduced by increasing stack size"
              ]
            },
            {
              "id": 200,
              "text": "What is const correctness and why does it matter in function parameters?",
              "options": [
                "Marking all variables as const to force them into read-only Flash memory",
                "A compiler flag that disables all pointer arithmetic",
                "Marking pointer parameters as const to document intent, catch accidental modification, and allow passing literals safely",
                "A runtime check that prevents any modification of function arguments"
              ]
            },
            {
              "id": 201,
              "text": "How does compiler optimization level affect debugging?",
              "options": [
                "Higher optimization levels always make debugging easier by simplifying code",
                "Optimization level has no effect on debugging; only compiler vendor matters",
                "Debug builds require the highest optimization level for accurate stepping",
                "Higher levels can reorder instructions and eliminate variables, making source-level debugging difficult; debug builds use -O0"
              ]
            },
            {
              "id": 202,
              "text": "How would you debug a hard fault / crash in embedded C?",
              "options": [
                "By capturing stacked registers (PC, LR, PSR) in the fault handler and checking CFSR/HFSR with the map file",
                "By increasing the watchdog timeout until the crash stops occurring",
                "By disabling all interrupts until the fault handler is no longer triggered",
                "By relying solely on printf statements placed throughout the code"
              ]
            }
          ]
        },
        {
          "name": "C++",
          "type": "mcq",
          "questions": [
            {
              "id": 203,
              "text": "Explain the virtual table (vtable) mechanism.",
              "options": [
                "A compile-time table used only for template instantiation",
                "A vtable is an array of function pointers per class; each object has a vptr for runtime-resolved virtual calls",
                "A table storing all member variable offsets for inheritance",
                "A linker-generated table mapping source lines to addresses"
              ]
            },
            {
              "id": 204,
              "text": "What is virtual inheritance and how does it solve the diamond problem?",
              "options": [
                "It duplicates the common ancestor once per inheritance path to avoid ambiguity",
                "It removes the common ancestor entirely from the derived class",
                "It ensures only one shared instance of the common ancestor exists, declared using the virtual keyword",
                "It replaces multiple inheritance with composition automatically"
              ]
            },
            {
              "id": 205,
              "text": "Explain move semantics and rvalue references.",
              "options": [
                "rvalue references allow copying an object twice as fast using memcpy",
                "Move semantics transfer resources from a temporary/expiring object using rvalue references, avoiding deep copies",
                "Move semantics only apply to primitive types like int and float",
                "rvalue references are used exclusively for passing arguments by const reference"
              ]
            },
            {
              "id": 206,
              "text": "What is perfect forwarding?",
              "options": [
                "A technique that always converts arguments to rvalues before forwarding",
                "A way to forward function calls to a base class implementation automatically",
                "Using a forwarding reference with std::forward to preserve an argument's original value category, avoiding copies",
                "A compiler optimization that inlines all forwarded function calls"
              ]
            },
            {
              "id": 207,
              "text": "Compare the performance implications of compile-time vs runtime polymorphism.",
              "options": [
                "Compile-time polymorphism always produces smaller binaries with more runtime overhead",
                "Runtime polymorphism is resolved during compilation with zero overhead",
                "Compile-time polymorphism has zero runtime overhead but larger code size; runtime polymorphism has vtable lookup overhead but more flexibility",
                "Both approaches have identical performance characteristics in embedded systems"
              ]
            },
            {
              "id": 208,
              "text": "What is a lambda expression and what is a capture list?",
              "options": [
                "A lambda is a macro; the capture list defines its return type",
                "An anonymous inline function object; the capture list specifies which surrounding variables it can access and how",
                "A named function template; the capture list lists its template parameters",
                "A lambda is only usable inside class member functions"
              ]
            },
            {
              "id": 209,
              "text": "What is std::function and how does it relate to functors?",
              "options": [
                "std::function can only store regular free functions, not lambdas or functors",
                "std::function is a compile-time-only construct with no runtime storage",
                "A polymorphic wrapper that can store and invoke any callable (function, lambda, or functor) matching a signature",
                "std::function is a synonym for a raw function pointer with no additional capability"
              ]
            },
            {
              "id": 210,
              "text": "What is template specialization?",
              "options": [
                "A way to prevent a template from being instantiated for certain types",
                "Providing a custom implementation of a template for specific type(s), overriding the generic template's behavior",
                "Automatically generating templates for every type used in a program",
                "A runtime mechanism for selecting between template versions"
              ]
            },
            {
              "id": 211,
              "text": "Explain exception safety guarantees.",
              "options": [
                "Basic guarantee means the operation never throws; strong guarantee means no leaks occur",
                "Basic (no leaks, valid state), strong (rollback/all-or-nothing via copy-and-swap), no-throw (never throws)",
                "There is only one exception safety guarantee level in C++: no-throw",
                "Strong guarantee means the object may end up in an invalid state after an exception"
              ]
            },
            {
              "id": 212,
              "text": "What is the difference between static_cast, dynamic_cast, const_cast, and reinterpret_cast?",
              "options": [
                "static_cast is runtime-checked; dynamic_cast is compile-time-checked; the other two are identical",
                "All four casts perform identical conversions but with different syntax",
                "reinterpret_cast is the safest cast; static_cast is the most dangerous",
                "static_cast is compile-time-checked; dynamic_cast is runtime-checked polymorphic downcasting; const_cast changes const/volatile; reinterpret_cast is unsafe bit reinterpretation"
              ]
            },
            {
              "id": 213,
              "text": "What is object slicing?",
              "options": [
                "Copying only the base class portion when a derived object is assigned/passed by value to a base object",
                "Splitting a large object into smaller objects for memory efficiency",
                "Losing the base class portion when a derived object is copied",
                "A compiler error that occurs when copying polymorphic objects"
              ]
            },
            {
              "id": 214,
              "text": "How can custom memory allocators be used with STL containers?",
              "options": [
                "By overriding the global new/delete operators only, not the container itself",
                "STL containers cannot use custom allocators; only raw arrays support them",
                "By passing an allocator template parameter (e.g., std::vector<T, MyAllocator<T>>) for custom allocate/deallocate behavior",
                "By recompiling the STL library with a different allocator flag"
              ]
            },
            {
              "id": 215,
              "text": "What is SFINAE?",
              "options": [
                "A rule requiring every template to have exactly one specialization",
                "A runtime exception thrown when template instantiation fails",
                "Substitution Failure Is Not An Error — invalid template substitution silently removes that overload from resolution",
                "A compiler warning suppression mechanism for unused templates"
              ]
            },
            {
              "id": 216,
              "text": "What is the difference between composition and inheritance? When should each be preferred?",
              "options": [
                "Inheritance is \"has-a\", composition is \"is-a\"; inheritance is always preferred",
                "Inheritance is \"is-a\", composition is \"has-a\"; composition is generally preferred for flexibility and lower coupling",
                "Composition and inheritance are interchangeable terms in C++",
                "Composition requires virtual functions while inheritance does not"
              ]
            },
            {
              "id": 217,
              "text": "What is the mutable keyword used for?",
              "options": [
                "It marks a variable as immutable even in non-const contexts",
                "It allows a data member to be modified even inside a const member function",
                "It forces a member function to always be treated as const",
                "It declares a variable that can only be set once at construction"
              ]
            },
            {
              "id": 218,
              "text": "How is thread safety achieved in C++?",
              "options": [
                "By declaring all shared variables as volatile only",
                "By avoiding the use of any global variables entirely",
                "Using std::mutex/lock_guard for locking, std::atomic for lock-free operations, and condition variables for signaling",
                "By always running code single-threaded to avoid the issue"
              ]
            },
            {
              "id": 219,
              "text": "What is placement new?",
              "options": [
                "A new operator variant that always allocates on the stack instead of the heap",
                "An operator that automatically calls the destructor after construction",
                "A way to overload the new operator globally for all classes",
                "Constructing an object at a specific pre-allocated address using new (address) Type(args), requiring manual destructor call"
              ]
            },
            {
              "id": 220,
              "text": "How does std::vector manage capacity vs size internally?",
              "options": [
                "Capacity is always equal to size; vector reallocates on every push_back",
                "std::vector maintains size and capacity, growing geometrically (e.g. doubling) on reallocation, giving amortized O(1) push_back",
                "Vector never reallocates; it uses a fixed maximum capacity set at compile time",
                "Capacity shrinks automatically whenever elements are removed"
              ]
            },
            {
              "id": 221,
              "text": "What design patterns are commonly used in embedded C++?",
              "options": [
                "MVC, Decorator, and Proxy patterns exclusively",
                "Only the Singleton pattern is practical in embedded C++",
                "Singleton, Observer, State, Factory, and Strategy patterns",
                "Visitor and Builder patterns are the only patterns used in embedded systems"
              ]
            },
            {
              "id": 222,
              "text": "What is the difference between a struct/class with virtual functions and one without, in terms of memory footprint?",
              "options": [
                "Virtual functions reduce memory footprint by removing the need for member variables",
                "There is no memory footprint difference; virtual functions only affect compile time",
                "A class with virtual functions adds a hidden vptr (typically 4-8 bytes) per object, increasing its size",
                "Virtual functions double the memory footprint of every member variable"
              ]
            }
          ]
        },
        {
          "name": "Digital Electronics",
          "type": "mcq",
          "questions": [
            {
              "id": 223,
              "text": "Explain timing closure and static timing analysis (STA).",
              "options": [
                "STA uses simulation vectors to dynamically test every possible input combination",
                "Timing closure ensures constraints are met across PVT corners; STA statically analyzes paths comparing arrival vs required times",
                "Timing closure only applies to FPGA designs, not ASICs",
                "STA is performed only after fabrication using physical test equipment"
              ]
            },
            {
              "id": 224,
              "text": "What is clock domain crossing (CDC) and how is it handled?",
              "options": [
                "CDC only occurs within a single clock domain and is handled by adding buffers",
                "A signal passing between asynchronous clock domains, risking metastability; handled via 2-FF synchronizers, async FIFOs, or handshakes",
                "CDC is prevented entirely by increasing clock frequency",
                "CDC is handled solely through combinational logic gating"
              ]
            },
            {
              "id": 225,
              "text": "Explain the design of a 2-flop synchronizer.",
              "options": [
                "Two flip-flops clocked by different clocks to double the sampling rate",
                "A single flip-flop with double the clock frequency to reduce metastability",
                "Two cascaded flip-flops in the destination clock domain, giving the signal a cycle to resolve before further use",
                "Two flip-flops connected in parallel to vote on the correct signal value"
              ]
            },
            {
              "id": 226,
              "text": "What is a FIFO and how is it used for CDC?",
              "options": [
                "A FIFO is used only within a single clock domain; it cannot cross clock domains",
                "A buffer between two interfaces of different rates/clocks; async FIFO uses Gray-coded pointers synchronized across domains for safe transfer",
                "A FIFO always requires the same clock on both read and write sides",
                "A FIFO eliminates the need for synchronizers entirely by using binary pointers"
              ]
            },
            {
              "id": 227,
              "text": "Explain low power design techniques like clock gating and power gating.",
              "options": [
                "Clock gating cuts power supply entirely; power gating only disables the clock signal",
                "Both techniques are identical and used interchangeably",
                "Clock gating disables the clock to inactive blocks, retaining state; power gating cuts power entirely, losing state",
                "Power gating only reduces dynamic power, not static leakage power"
              ]
            },
            {
              "id": 228,
              "text": "What is DFT (Design for Test) and scan chain?",
              "options": [
                "DFT is a synthesis tool; scan chain is a type of clock tree",
                "DFT techniques ease post-manufacture testing; a scan chain converts flip-flops into a shiftregister chain for test pattern shifting",
                "DFT applies only to analog circuits, not digital logic",
                "Scan chain refers to scanning PCB layouts for manufacturing defects"
              ]
            },
            {
              "id": 229,
              "text": "Compare the ASIC and FPGA design flows.",
              "options": [
                "ASIC flow uses a bitstream loaded onto reconfigurable fabric; FPGA flow requires fabrication at a foundry",
                "FPGA flow has higher NRE cost and longer lead time than ASIC flow",
                "ASIC flow ends with a bitstream; FPGA flow ends with physical fabrication",
                "ASIC flow proceeds through fabrication with high NRE cost; FPGA flow targets programmable fabric via a loaded bitstream, offering fast turnaround"
              ]
            },
            {
              "id": 230,
              "text": "What are common state encoding techniques for FSMs?",
              "options": [
                "Binary, one-hot, and Gray encoding — trading flip-flop count against decode logic complexity and glitch behavior",
                "Only binary encoding is used in modern FSM design",
                "One-hot encoding always uses fewer flip-flops than binary encoding",
                "Gray encoding is used to minimize flip-flop count, not to reduce glitches"
              ]
            },
            {
              "id": 231,
              "text": "How is arbitration handled in shared bus systems?",
              "options": [
                "Arbitration is unnecessary in shared bus systems since every master transmits simultaneously",
                "By an arbiter granting bus access via fixed priority, round-robin, or dynamic priority schemes",
                "By assigning every master a permanently fixed time slot regardless of demand",
                "Arbitration is handled purely at the software application layer, never in hardware"
              ]
            },
            {
              "id": 232,
              "text": "Explain the refresh cycle requirement in DRAM.",
              "options": [
                "DRAM refresh rewrites the entire chip's firmware periodically",
                "Refresh cycles are used to update the clock frequency, not data retention",
                "DRAM cells store charge on a capacitor that leaks; the controller periodically refreshes each row to prevent data loss",
                "DRAM does not require refresh; only SRAM requires periodic refresh"
              ]
            },
            {
              "id": 233,
              "text": "What is crosstalk and how does it affect signal integrity?",
              "options": [
                "Crosstalk is intentional signal coupling used for clock distribution",
                "Unwanted coupling from an adjacent trace via EM coupling, potentially causing glitches; mitigated with spacing and shielding",
                "Crosstalk only occurs in wireless RF systems, not on PCB traces",
                "Crosstalk is eliminated entirely by increasing clock frequency"
              ]
            },
            {
              "id": 234,
              "text": "What is jitter budget analysis?",
              "options": [
                "A method for measuring only the oscillator's frequency accuracy",
                "Allocating the total acceptable jitter across all contributing sources so combined effect stays within setup/hold margin",
                "A technique used exclusively to calculate power consumption budgets",
                "A process that eliminates jitter entirely by using a single clock source"
              ]
            },
            {
              "id": 235,
              "text": "What is the difference between synchronous and asynchronous FIFO?",
              "options": [
                "Synchronous FIFO uses separate clocks for read/write; asynchronous FIFO uses a single clock",
                "Both FIFO types require Gray-coded pointers regardless of clock configuration",
                "Synchronous FIFO uses a single common clock for read/write; asynchronous FIFO uses separate clocks requiring synchronized Gray-coded pointers",
                "Asynchronous FIFO cannot detect full/empty conditions reliably"
              ]
            },
            {
              "id": 236,
              "text": "What is ECC (Error Correcting Code) in memory?",
              "options": [
                "ECC compresses memory data to save space, unrelated to error detection",
                "ECC only detects errors but can never correct them",
                "Redundant parity bits (e.g., Hamming code) that detect and correct single-bit errors, and detect multi-bit errors",
                "ECC is a technique used exclusively to increase memory clock speed"
              ]
            },
            {
              "id": 237,
              "text": "How is glitch-free clock switching achieved?",
              "options": [
                "By using a simple combinational multiplexer to instantly switch between clocks",
                "By synchronized flip-flop-based control logic switching at a safe point (e.g. both clocks low), avoiding runt pulses",
                "By disabling both clock sources simultaneously during the switch",
                "Glitch-free switching is achieved only through analog filtering circuits"
              ]
            },
            {
              "id": 238,
              "text": "What is a phase detector in a PLL?",
              "options": [
                "A circuit that measures the amplitude difference between two clock signals",
                "A component that compares reference and feedback clock phase, producing an error signal to drive the loop filter/VCO",
                "A detector that counts the number of clock cycles elapsed",
                "A circuit used only to detect clock signal loss, not phase difference"
              ]
            },
            {
              "id": 239,
              "text": "What is setup/hold margin and timing derating?",
              "options": [
                "Margin is the exact required setup/hold time; derating only applies to hold time",
                "Timing derating eliminates the need for setup/hold margin analysis",
                "Margin is extra slack beyond minimum setup/hold requirements; derating scales timing for onchip process/voltage/temperature variation",
                "Setup/hold margin applies only to asynchronous designs"
              ]
            },
            {
              "id": 240,
              "text": "What is IR drop and how does it affect a circuit?",
              "options": [
                "IR drop is a measure of infrared interference on high-speed signal traces",
                "IR drop is caused exclusively by clock skew, not power distribution",
                "IR drop only affects analog circuits, not digital logic",
                "Voltage drop across the power distribution network, which can reduce effective supply voltage and cause timing violations"
              ]
            },
            {
              "id": 241,
              "text": "What is the difference between static and dynamic power consumption?",
              "options": [
                "Dynamic power is consumed continuously when idle; static power depends on switching frequency",
                "Static and dynamic power are the same phenomenon measured at different voltages",
                "Dynamic power is proportional to switching activity (P=CV²f); static power is continuous leakage current even when idle",
                "Static power only exists in analog circuits, not digital CMOS logic"
              ]
            },
            {
              "id": 242,
              "text": "What is boundary scan (JTAG) testing?",
              "options": [
                "Boundary scan tests only the internal core logic, not I/O pins",
                "IEEE 1149.1 shift-register cells at each I/O pin, enabling interconnect/functional testing without physical probes; also used for programming/debug",
                "JTAG is a power-supply testing standard unrelated to digital logic",
                "Boundary scan requires physical probes on every pin to function"
              ]
            }
          ]
        },
        {
          "name": "Microcontroller (Peripherals & Memory)",
          "type": "mcq",
          "questions": [
            {
              "id": 243,
              "text": "Explain the interrupt vector table and NVIC priority grouping in ARM Cortex-M.",
              "options": [
                "The vector table is located in RAM only and cannot be relocated",
                "NVIC priority grouping only supports a single priority level for all interrupts",
                "Vector table holds initial stack pointer and handler addresses; NVIC priority grouping splits priority into preemption and sub-priority",
                "The vector table stores peripheral register values, not handler addresses"
              ]
            },
            {
              "id": 244,
              "text": "What is the difference between NMI and normal interrupts?",
              "options": [
                "NMI can be disabled by software; normal interrupts cannot",
                "NMI and normal interrupts have identical priority and masking behavior",
                "NMI is the highest-priority, non-maskable interrupt for critical events; normal interrupts can be individually masked/prioritized",
                "NMI is used only for GPIO events; normal interrupts handle all other peripherals"
              ]
            },
            {
              "id": 245,
              "text": "Explain DMA double-buffering (ping-pong) technique.",
              "options": [
                "A single buffer is read and written simultaneously by CPU and DMA",
                "Two buffers alternate — CPU processes one completed buffer while DMA fills/empties the other, then roles swap",
                "Double-buffering doubles the DMA transfer speed by using two channels at once",
                "Ping-pong buffering requires the CPU to poll the DMA status continuously with no swap"
              ]
            },
            {
              "id": 246,
              "text": "Differentiate bus fault, usage fault, and hard fault in ARM Cortex-M.",
              "options": [
                "Bus fault is an instruction error; usage fault is a memory access error; hard fault only occurs on reset",
                "All three faults are triggered by the same condition: invalid memory access",
                "Bus fault is a memory access error; usage fault is an instruction execution error; hard fault is the default/escalated handler",
                "Usage fault only occurs during DMA transfers; bus fault only occurs during interrupts"
              ]
            },
            {
              "id": 247,
              "text": "Explain the different low-power modes (sleep, stop, standby) in microcontrollers.",
              "options": [
                "Sleep mode provides the lowest power consumption; standby provides the fastest wake-up",
                "Sleep, stop, and standby modes provide progressively deeper power savings, with standby retaining the least state and having the lowest power",
                "Stop mode powers down all RAM content while sleep mode retains it",
                "Standby mode allows instant wake-up via any interrupt, same as sleep mode"
              ]
            },
            {
              "id": 248,
              "text": "What is a Memory Protection Unit (MPU) and its use?",
              "options": [
                "A unit that physically partitions Flash memory into separate chips",
                "A peripheral that increases available RAM by compressing unused pages",
                "A unit that defines memory regions with access permissions, used to isolate RTOS tasks and catch stack overflows",
                "MPU is used only to speed up cache access, unrelated to protection"
              ]
            },
            {
              "id": 249,
              "text": "Explain bootloader design and the application jump mechanism.",
              "options": [
                "The bootloader erases itself before jumping to the application",
                "The bootloader relocates VTOR to the application's vector table, sets the stack pointer, and jumps to the application's reset handler",
                "The application jump mechanism requires the bootloader to remain running in the background",
                "The bootloader jumps to a fixed address without relocating the vector table"
              ]
            },
            {
              "id": 250,
              "text": "What is the difference between using internal and external Flash memory?",
              "options": [
                "Internal Flash offers larger capacity than external Flash but is slower",
                "External Flash is always faster than internal Flash regardless of interface",
                "Internal Flash is faster and simpler but limited in capacity; external Flash offers larger capacity but requires a dedicated interface",
                "Internal and external Flash have identical access speed and capacity characteristics"
              ]
            },
            {
              "id": 251,
              "text": "Explain the basics of the CAN bus protocol.",
              "options": [
                "CAN is a single-master protocol using destructive collision detection like Ethernet",
                "CAN uses higher message ID to indicate higher priority during arbitration",
                "A multi-master differential serial bus using non-destructive bitwise arbitration where lower ID means higher priority, frames carry up to 8 data bytes",
                "CAN bus supports only point-to-point communication between exactly two nodes"
              ]
            },
            {
              "id": 252,
              "text": "What is the difference between CAN and CAN-FD?",
              "options": [
                "CAN-FD reduces the maximum payload to 4 bytes for higher speed",
                "Standard CAN supports up to 8 bytes at 1 Mbps; CAN-FD extends payload to 64 bytes with a faster data-phase bit rate",
                "CAN and CAN-FD have identical payload sizes but different physical layers",
                "CAN-FD is a completely separate protocol incompatible with CAN at the physical layer"
              ]
            },
            {
              "id": 253,
              "text": "How does I2C multi-master arbitration work?",
              "options": [
                "The first master to start a transaction always wins arbitration regardless of data",
                "Arbitration is decided by a dedicated hardware arbiter chip external to the masters",
                "Masters monitor SDA while driving; if a master drives HIGH but reads back LOW, it loses arbitration and stops transmitting",
                "I2C does not support multi-master operation at all"
              ]
            },
            {
              "id": 254,
              "text": "What is SPI daisy chaining?",
              "options": [
                "Connecting multiple SPI buses in parallel, each with its own chip select",
                "Chaining MOSI of one device to MOSI of the next using separate clocks",
                "A method to increase SPI clock speed by chaining multiple clock sources",
                "Connecting devices in series (MISO to next MOSI) forming a shift-register chain, using a single chip-select and clock"
              ]
            },
            {
              "id": 255,
              "text": "How is the power consumption of a peripheral typically estimated?",
              "options": [
                "By measuring only the peak dynamic current and ignoring static leakage",
                "Power is estimated purely from the peripheral's clock frequency alone",
                "Summing static and dynamic current from datasheet tables, then multiplying by supply voltage and duty cycle",
                "Power consumption cannot be estimated without physical measurement equipment"
              ]
            },
            {
              "id": 256,
              "text": "What is oversampling in ADC and what benefit does it provide?",
              "options": [
                "Oversampling reduces the ADC's effective resolution to save processing time",
                "Sampling at a rate much higher than Nyquist minimum, then averaging/filtering to increase effective resolution and reduce quantization noise",
                "Oversampling is used only to reduce ADC power consumption, not improve accuracy",
                "Oversampling doubles the ADC's physical bit-width in hardware"
              ]
            },
            {
              "id": 257,
              "text": "How is timer synchronization achieved across multiple timers?",
              "options": [
                "By connecting all timers to a single shared interrupt line",
                "Timer synchronization is only possible using external hardware, not internal routing",
                "Master-slave synchronization, where a master timer's trigger output is routed to synchronize slave timers",
                "By manually resetting each timer's counter register at the same instruction cycle"
              ]
            },
            {
              "id": 258,
              "text": "What is an RTC (Real-Time Clock) peripheral used for?",
              "options": [
                "An RTC generates high-precision PWM signals for motor control",
                "A low-power peripheral maintaining time/calendar info via a separate crystal and backup domain, used for timestamping and scheduled wake-ups",
                "RTC is used exclusively for generating the main system clock",
                "An RTC loses all time data whenever the main system enters sleep mode"
              ]
            },
            {
              "id": 259,
              "text": "How is a race condition handled between an ISR and main code accessing a shared variable?",
              "options": [
                "By declaring the variable static only, with no other protection needed",
                "Declaring the variable volatile and protecting access via disabling interrupts or a critical section during read/modify",
                "By using a global variable without any qualifiers or protection",
                "Race conditions cannot occur between an ISR and main code by design"
              ]
            },
            {
              "id": 260,
              "text": "What is DMA circular mode?",
              "options": [
                "DMA transfers data only once and then halts automatically",
                "Circular mode requires the CPU to manually restart the transfer after each buffer",
                "DMA automatically wraps back to the buffer start upon reaching the end, continuing indefinitely without CPU intervention",
                "Circular mode is used only for one-time large block transfers, not continuous streaming"
              ]
            },
            {
              "id": 261,
              "text": "How are UART overrun and framing errors typically handled?",
              "options": [
                "Overrun error means a missing stop bit; framing error means a byte arrived before the previous was read",
                "Overrun error occurs when a new byte arrives before the previous is read (flagged and cleared); framing error occurs when the stop bit is missing",
                "Both overrun and framing errors are corrected automatically by the UART hardware with no software involvement",
                "Overrun and framing errors only occur when using software UART, never hardware UART"
              ]
            },
            {
              "id": 262,
              "text": "What is bit-banding in ARM Cortex-M and how is it used?",
              "options": [
                "Bit-banding compresses multiple registers into a single word to save memory",
                "Bit-banding is a technique for bundling multiple GPIO pins into one instruction only during boot",
                "Mapping each bit in an SRAM/peripheral region to a word in an alias region, enabling atomic single-instruction bit access",
                "Bit-banding requires a mutex to safely toggle individual bits"
              ]
            }
          ]
        },
        {
          "name": "RTOS",
          "type": "mcq",
          "questions": [
            {
              "id": 263,
              "text": "What is the difference between priority inheritance and priority ceiling protocols?",
              "options": [
                "Priority inheritance assigns a fixed ceiling to each resource; priority ceiling only reacts once blocking occurs",
                "Priority inheritance raises a task's priority only when blocking occurs; priority ceiling raises it immediately to a fixed resource ceiling upon locking",
                "Both protocols are identical and differ only in name",
                "Priority ceiling protocol is only usable in single-task systems"
              ]
            },
            {
              "id": 264,
              "text": "What is a tickless RTOS and why is it used?",
              "options": [
                "A tickless RTOS removes the scheduler entirely, running tasks in a fixed loop",
                "Tickless mode increases tick frequency to improve responsiveness",
                "Suppressing the periodic tick during idle periods, firing the timer only for the next scheduled event, to reduce power consumption",
                "A tickless RTOS is used only in systems without an interrupt controller"
              ]
            },
            {
              "id": 265,
              "text": "How is stack size determined for RTOS tasks?",
              "options": [
                "Stack size is fixed by the RTOS kernel and cannot be changed per task",
                "By estimating worst-case call depth and variable usage plus margin, then refining with stack highwater-mark APIs",
                "Stack size is always set equal to the total heap size divided by task count",
                "Stack size only needs to account for global variables, not local ones"
              ]
            },
            {
              "id": 266,
              "text": "What is task starvation and how can it be prevented?",
              "options": [
                "Task starvation occurs when a task runs too frequently; prevented by lowering its priority further",
                "Task starvation only affects the highest-priority task in the system",
                "A lower-priority task never getting CPU time due to continuously ready higher-priority tasks; prevented via aging or time-slicing",
                "Task starvation is prevented solely by increasing the RTOS tick rate"
              ]
            },
            {
              "id": 267,
              "text": "Explain Rate Monotonic and Earliest Deadline First scheduling algorithms.",
              "options": [
                "RMS is dynamic-priority based on deadlines; EDF is fixed-priority based on period",
                "Both RMS and EDF assign the same fixed priority to all periodic tasks",
                "EDF always has lower overhead than RMS despite lower CPU utilization",
                "RMS is fixed-priority (shorter period = higher priority); EDF is dynamic-priority (nearest deadline runs next), achieving higher utilization but more overhead"
              ]
            },
            {
              "id": 268,
              "text": "What is the role of the RTOS tick?",
              "options": [
                "The RTOS tick only manages peripheral clock configuration, not scheduling",
                "A periodic timer interrupt driving scheduler time-based operations: delay counters, time-slicing, and timeout wake-ups",
                "The RTOS tick is used exclusively to refresh the watchdog timer",
                "The RTOS tick fires only once at system startup to initialize the scheduler"
              ]
            },
            {
              "id": 269,
              "text": "What are the different inter-task communication mechanisms in an RTOS?",
              "options": [
                "Only global variables and polling loops are used for inter-task communication",
                "Message queues, semaphores, mutexes, event flags/groups, and mailboxes, each suited to different needs",
                "Inter-task communication is achieved solely through shared memory with no synchronization",
                "RTOS tasks communicate only via direct function calls between each other"
              ]
            },
            {
              "id": 270,
              "text": "How is a critical section implemented in an RTOS?",
              "options": [
                "By permanently disabling interrupts for the entire program runtime",
                "Critical sections are implemented only via busy-wait polling loops",
                "By disabling interrupts briefly, using a mutex for longer sections, or RTOS critical-section APIs that handle nested masking",
                "Critical sections require rebooting the system to reset shared state"
              ]
            },
            {
              "id": 271,
              "text": "How is memory managed in an RTOS — static vs dynamic allocation?",
              "options": [
                "Static allocation happens at runtime; dynamic allocation happens at compile time",
                "Dynamic allocation is always preferred in safety-critical RTOS systems",
                "Static allocation reserves fixed memory at compile time for predictability; dynamic allocation uses RTOS heap schemes at runtime for flexibility",
                "RTOS systems only support dynamic allocation, never static"
              ]
            },
            {
              "id": 272,
              "text": "What are event groups and how are they used for task synchronization?",
              "options": [
                "Event groups are single binary semaphores used for mutual exclusion only",
                "A set of binary flags that tasks set/clear/wait on with AND/OR conditions, blocking until specific events occur",
                "Event groups replace message queues entirely and cannot signal multiple conditions",
                "Event groups are used only to store task priority levels"
              ]
            }
          ]
        },
        {
          "name": "Linux",
          "type": "mcq",
          "questions": [
            {
              "id": 273,
              "text": "What does the 'top' / 'htop' command do?",
              "options": [
                "top and htop are used exclusively to view filesystem disk usage",
                "top displays a real-time view of processes, CPU, and memory usage; htop is an enhanced, interactive, color-coded version",
                "top only shows network statistics, not process information",
                "htop is a command for compressing and archiving files"
              ]
            },
            {
              "id": 274,
              "text": "What does 'df -h' do?",
              "options": [
                "Displays disk space usage for mounted filesystems in human-readable format (size, used, available, mount points)",
                "Displays real-time CPU and memory usage per process",
                "Deletes files matching a human-readable pattern",
                "Displays the current date and time in human-readable format"
              ]
            },
            {
              "id": 275,
              "text": "What does 'free -m' do?",
              "options": [
                "Frees up disk space by deleting temporary files in megabyte chunks",
                "Lists all free (unused) USB ports on the system",
                "Displays total, used, and free RAM and swap memory in megabytes",
                "Displays free CPU core availability in megahertz"
              ]
            },
            {
              "id": 276,
              "text": "What does the 'find' command do?",
              "options": [
                "Searches for files/directories within a hierarchy based on criteria like name, type, size, or modification time",
                "find only searches file contents for a text string, not filenames",
                "find lists currently running processes matching a given name",
                "find compresses matched files into an archive automatically"
              ]
            },
            {
              "id": 277,
              "text": "What does the 'tar' command do?",
              "options": [
                "tar formats a disk partition before creating a filesystem",
                "tar monitors real-time network traffic between two hosts",
                "tar displays the contents of a text file with line numbers",
                "tar creates or extracts archive files, often combined with compression (e.g. tar -czvf, tar -xzvf)"
              ]
            },
            {
              "id": 278,
              "text": "What does the 'ssh' command do?",
              "options": [
                "ssh establishes an encrypted remote login/command execution session to another machine over a network",
                "ssh copies files between local directories without network access",
                "ssh is used to schedule cron jobs on a remote host only",
                "ssh displays the shell command history for the current session"
              ]
            },
            {
              "id": 279,
              "text": "What do 'netstat' and 'ss' commands do?",
              "options": [
                "netstat and ss are used to configure static IP addresses on a network interface",
                "ss is deprecated in favor of netstat, which is the modern replacement",
                "Both display network connection information (sockets, listening ports, routing); ss is the modern, faster replacement for netstat",
                "netstat and ss only work on wireless network interfaces"
              ]
            },
            {
              "id": 280,
              "text": "What do 'kill' and 'killall' commands do?",
              "options": [
                "kill sends a signal to a process by PID to terminate/control it; killall targets processes by name instead",
                "kill terminates a process by name; killall terminates by PID",
                "kill and killall are identical commands with different syntax for the same operation",
                "killall is used to kill all user sessions on the system, not individual processes"
              ]
            },
            {
              "id": 281,
              "text": "What does 'systemctl' do?",
              "options": [
                "systemctl is used to check CPU temperature and throttling status",
                "systemctl controls the systemd service manager — starting, stopping, enabling, and checking status of services",
                "systemctl compiles and links system libraries during boot",
                "systemctl is a text editor used for editing system configuration files"
              ]
            },
            {
              "id": 282,
              "text": "What does the 'dmesg' command do?",
              "options": [
                "dmesg displays the contents of the current user's mailbox",
                "dmesg deletes old kernel log messages to free disk space",
                "dmesg prints kernel ring buffer messages, including boot logs, hardware detection, and driver/kernel events",
                "dmesg is used exclusively to configure kernel module parameters"
              ]
            }
          ]
        },
        {
          "name": "Coding (MCQ)",
          "type": "mcq",
          "questions": [
            {
              "id": 283,
              "text": "Write a C program to detect a loop (cycle) in a singly linked list.",
              "options": [
                "Traverse the list once and store all visited addresses in a hash set to detect repeats",
                "Reverse the list and check if the head pointer changes after reversal",
                "Floyd's tortoise-and-hare algorithm — two pointers moving at different speeds meet if a cycle exists, in O(n) time and O(1) space",
                "Count the total nodes and compare against a fixed maximum list length"
              ]
            },
            {
              "id": 284,
              "text": "Implement a circular buffer (ring buffer) in C for a producer-consumer scenario.",
              "options": [
                "A dynamically resized array that reallocates whenever the buffer becomes full",
                "A fixed-size array with head/tail indices wrapping via modulo, using a count to distinguish full/empty, protected with volatile and critical sections",
                "A linked list where new nodes are appended and old ones are freed after consumption",
                "A doubly-linked circular list requiring no synchronization since indices are atomic"
              ]
            }
          ]
        },
        {
          "name": "Firmware Upgrade",
          "type": "mcq",
          "questions": [
            {
              "id": 285,
              "text": "What is a bootloader and what role does it play in firmware upgrade?",
              "options": [
                "A bootloader is the main application itself, running after firmware has already loaded",
                "A bootloader only verifies firmware signatures but cannot write to Flash",
                "A small program running right after reset that receives new firmware over a comm interface, writes it to Flash, and hands off control",
                "A bootloader is a hardware component, not a software program"
              ]
            },
            {
              "id": 286,
              "text": "What is OTA (Over-The-Air) update?",
              "options": [
                "OTA update requires a physical USB or serial cable connection to the device",
                "Remotely delivering and installing new firmware wirelessly (Wi-Fi, cellular, BLE) without physical access",
                "OTA update is a technique for testing firmware before release, not deploying it",
                "OTA update only applies to updating a device's real-time clock"
              ]
            },
            {
              "id": 287,
              "text": "What is a dual-bank / A-B partition firmware update scheme?",
              "options": [
                "Two Flash banks that are always active simultaneously, running different firmware versions in parallel",
                "A single Flash bank split into read-only and read-write halves",
                "Flash is divided into two banks; new firmware is written to the inactive bank and the device switches after verification, allowing rollback",
                "Dual-bank schemes require external Flash and cannot use internal Flash"
              ]
            },
            {
              "id": 288,
              "text": "How is firmware integrity typically verified before/after an update?",
              "options": [
                "By comparing the firmware file size only against an expected value",
                "Integrity is verified solely by the user visually inspecting the firmware binary",
                "By checksum/CRC to detect corruption, and cryptographic hash with digital signature (verified via public key) for authenticity",
                "Firmware integrity cannot be verified before boot, only after the device crashes"
              ]
            },
            {
              "id": 289,
              "text": "What happens if power fails during a firmware update, and how is this handled?",
              "options": [
                "Power failure has no effect since Flash writes are instantaneous and atomic",
                "Power failure erases the bootloader, requiring full chip replacement",
                "It is handled solely by adding a larger capacitor to the power supply circuit",
                "It can leave firmware partially written/corrupted; mitigated via dual-bank schemes or a bootloader checking a valid-firmware flag/CRC with fallback"
              ]
            }
          ]
        }
      ]
    },
    "senior": {
      "label": "Senior (5–8 Years)",
      "desc": "5 to 8 years of experience",
      "mcqCount": 125,
      "codingCount": 2,
      "durationMinutes": 155,
      "modules": [
        {
          "name": "C",
          "type": "mcq",
          "questions": [
            {
              "id": 290,
              "text": "How would you design a lock-free data structure using atomic operations?",
              "options": [
                "Use atomic compare-and-swap on shared indices/pointers so at least one thread always makes progress.",
                "Protect every operation with a single global mutex shared by all threads.",
                "Disable interrupts on all cores whenever the structure is accessed.",
                "Use priority inheritance on a semaphore to serialize access."
              ]
            },
            {
              "id": 291,
              "text": "What are compiler/memory barriers and why are they needed in multi-core embedded systems?",
              "options": [
                "Force the CPU to flush its instruction cache before every branch.",
                "Prevent compiler and CPU reordering of memory operations across the barrier, ensuring visibility order between cores/DMA.",
                "Guarantee that DMA transfers complete before the next instruction fetch.",
                "Increase compiler optimization level for memory-heavy code."
              ]
            },
            {
              "id": 292,
              "text": "What techniques reduce ISR execution time?",
              "options": [
                "Perform all data processing inside the ISR to minimize latency.",
                "Increase the ISR's interrupt priority so it always preempts other work.",
                "Keep the ISR minimal (flag/queue data) and defer heavy processing to a task, using DMA to offload transfers.",
                "Add printf debug statements to trace ISR execution in real time."
              ]
            },
            {
              "id": 293,
              "text": "How is an RTOS context switch implemented at the assembly level (e.g., PendSV on Cortex-M)?",
              "options": [
                "The SysTick handler directly swaps the program counter between tasks on every tick.",
                "A highest-priority NMI handler forcibly interrupts the running task to switch context.",
                "The MPU fault handler triggers a switch whenever a task exceeds its memory region.",
                "PendSV (lowest priority) saves remaining registers, swaps the stack pointer between task control blocks, and exception-returns into the new task."
              ]
            },
            {
              "id": 294,
              "text": "What is MISRA-C and why does it matter?",
              "options": [
                "Coding guidelines restricting risky C constructs to reduce undefined behavior in safety-critical software.",
                "A real-time scheduling standard defining fixed-priority task ordering.",
                "A hardware certification standard for automotive microcontrollers.",
                "A memory allocation library for safety-critical systems."
              ]
            },
            {
              "id": 295,
              "text": "What role do static analysis tools play in embedded software quality?",
              "options": [
                "Instrument running code with breakpoints to catch runtime memory errors.",
                "Examine source code without executing it to detect bugs and enforce coding standards early.",
                "Measure actual CPU cycle counts during hardware-in-the-loop testing.",
                "Automatically generate unit test cases from function signatures."
              ]
            },
            {
              "id": 296,
              "text": "How would you profile and optimize C code for embedded performance?",
              "options": [
                "Rely solely on increasing the compiler's optimization level with no measurement.",
                "Add more RTOS tasks to parallelize hot code paths.",
                "Use hardware cycle counters or GPIO toggling to measure, then inline hot paths and replace expensive ops with cheaper alternatives.",
                "Convert all fixed-point math to floating point for accuracy."
              ]
            },
            {
              "id": 297,
              "text": "What are cache coherency issues in multi-core embedded systems?",
              "options": [
                "Two cores attempt to write to the same flash sector simultaneously, corrupting it.",
                "The DMA controller bypasses the bus arbiter and locks out both cores.",
                "The MMU fails to translate a shared virtual address consistently across cores.",
                "A core reads stale data from its own cache after another core modified the shared value, without a coherency protocol like MESI."
              ]
            },
            {
              "id": 298,
              "text": "How do DMA and CPU cache interact, and how is coherency maintained?",
              "options": [
                "The CPU cache is invalidated before reading DMA-written data (or cleaned before DMA reads), or DMA buffers are placed in non-cacheable memory.",
                "DMA automatically updates the CPU cache on every transfer, so no action is needed.",
                "DMA transfers are blocked entirely whenever the cache is enabled.",
                "The MPU prevents DMA from accessing any cached memory region."
              ]
            },
            {
              "id": 299,
              "text": "What techniques reduce code size in flash-constrained embedded systems?",
              "options": [
                "Increase stack size to reduce the number of function calls needed.",
                "Enable -Os optimization, linker garbage collection, avoid heavy printf/float libraries, and use leaner custom drivers.",
                "Use dynamic memory allocation instead of static allocation to save flash space.",
                "Add more debug symbols to help the linker eliminate dead code."
              ]
            },
            {
              "id": 300,
              "text": "How would you design a robust error-handling framework in C?",
              "options": [
                "Silently ignore recoverable errors to keep the control flow simple.",
                "Rely only on runtime exceptions to unwind the call stack on failure.",
                "Define consistent error codes, propagate them up the call chain, use assertions, and trigger safestate recovery for critical faults.",
                "Use global variables exclusively to track error state across modules."
              ]
            },
            {
              "id": 301,
              "text": "What are compiler-specific attributes like __attribute__((packed)) and section placement used for?",
              "options": [
                "packed increases alignment for faster access; section defines interrupt priority.",
                "packed enables compiler auto-vectorization; section reserves stack space.",
                "packed disables optimization for a function; section marks a variable as volatile.",
                "packed removes structure padding to match hardware layout; section places code/data into a specific linker-defined memory region."
              ]
            },
            {
              "id": 302,
              "text": "How are compiler intrinsics used for hardware-specific optimization?",
              "options": [
                "Compiler-provided functions that map directly to specific CPU instructions without needing inline assembly.",
                "Runtime library calls that emulate missing hardware features in software.",
                "Preprocessor macros used only for conditional compilation across targets.",
                "Debug-only functions stripped out in release builds."
              ]
            },
            {
              "id": 303,
              "text": "How is worst-case stack usage analyzed in embedded C?",
              "options": [
                "Measured only by running the largest test input once and recording peak RAM.",
                "Static analysis of worst-case call-graph depth (e.g., -fstack-usage) or dynamic stack-painting to find the high-water mark.",
                "Determined from the linker map file's total RAM section size.",
                "Calculated by summing the size of all global variables in the program."
              ]
            },
            {
              "id": 304,
              "text": "How is safe multi-threaded/multi-context access to peripheral registers achieved?",
              "options": [
                "Allow any task to write registers directly without coordination since hardware handles arbitration.",
                "Rely on the compiler to serialize register accesses automatically.",
                "Protect read-modify-write sequences with critical sections/mutexes and use atomic bit operations, with one owning task per peripheral.",
                "Use a separate core exclusively for all peripheral access to avoid contention."
              ]
            },
            {
              "id": 305,
              "text": "What are best practices for reviewing safety-critical embedded C code?",
              "options": [
                "Focus exclusively on code style and formatting consistency.",
                "Verify only that the code compiles without warnings on the target toolchain.",
                "Check performance benchmarks are met before checking correctness.",
                "Verify MISRA compliance, error handling, correct volatile usage, interrupt/race safety, bounds checking, and requirements traceability."
              ]
            },
            {
              "id": 306,
              "text": "What pitfalls exist with IEEE 754 floating-point representation in embedded systems?",
              "options": [
                "Rounding errors accumulate and equality comparisons are unreliable; many low-end MCUs lack an FPU, making float slow.",
                "Floating-point numbers are always exact for values used in embedded control loops.",
                "Floating-point arithmetic is faster than integer arithmetic on all microcontrollers.",
                "IEEE 754 floats cannot represent negative numbers without a separate sign flag."
              ]
            },
            {
              "id": 307,
              "text": "Explain the use of watchdog windows and fault recovery strategies.",
              "options": [
                "A windowed watchdog only resets the system if it is fed too late, never too early.",
                "A windowed watchdog requires feeding within a specific time window, catching both hangs and abnormal fast looping, combined with logging reset causes and safe-mode fallback.",
                "Watchdog windows extend the timeout period whenever a fault is detected.",
                "Fault recovery strategies rely solely on immediate hardware reset with no diagnostic logging."
              ]
            },
            {
              "id": 308,
              "text": "What techniques help achieve deterministic real-time behavior in C code?",
              "options": [
                "Use dynamic memory allocation freely since modern allocators are fast enough.",
                "Maximize use of recursive algorithms for cleaner code structure.",
                "Avoid dynamic allocation and unbounded loops, minimize blocking calls, and perform WCET analysis under fixed-priority scheduling.",
                "Rely on best-effort scheduling to average out execution time variance."
              ]
            },
            {
              "id": 309,
              "text": "What is the difference between a hard real-time and soft real-time requirement, and how does it influence C code design?",
              "options": [
                "Hard real-time allows occasional missed deadlines if average performance is acceptable.",
                "Soft real-time systems require formal WCET proofs while hard real-time systems do not.",
                "The distinction only matters for systems with a display or multimedia output.",
                "A hard deadline must never be missed (system failure if it is); a soft deadline can occasionally be missed with degraded but acceptable quality."
              ]
            }
          ]
        },
        {
          "name": "C++",
          "type": "mcq",
          "questions": [
            {
              "id": 310,
              "text": "How would you design a plugin/driver architecture using virtual interfaces?",
              "options": [
                "Define an abstract base class with pure virtual methods; concrete drivers implement it, and clients depend only on the interface.",
                "Use a single global struct of function pointers shared by all drivers.",
                "Use preprocessor macros to select the driver implementation at compile time only.",
                "Implement each driver as a separate translation unit with no common interface."
              ]
            },
            {
              "id": 311,
              "text": "What are move-only types and where are they useful in embedded C++?",
              "options": [
                "A type that can be copied freely but never moved, ensuring shared ownership.",
                "A type that deletes copy operations but supports move, giving exclusive, transferable ownership of a resource like a peripheral handle.",
                "A type restricted to constexpr contexts only, evaluated entirely at compile time.",
                "A type that overloads only the assignment operator to prevent aliasing."
              ]
            },
            {
              "id": 312,
              "text": "Explain the Curiously Recurring Template Pattern (CRTP) and how it can replace virtual functions for performance.",
              "options": [
                "A pattern where a class inherits from itself recursively to reduce object size.",
                "A runtime polymorphism technique that replaces virtual tables with function pointers.",
                "A base class templated on its derived type, using static_cast dispatch for compile-time polymorphism without vtable overhead.",
                "A macro-based technique for generating getter/setter boilerplate."
              ]
            },
            {
              "id": 313,
              "text": "What is constexpr and how does it enable compile-time computation?",
              "options": [
                "A keyword that forces a variable to be stored only in RAM.",
                "A qualifier that marks a function as thread-safe for concurrent calls.",
                "A specifier that disables inlining to aid debugging.",
                "Allows a variable's value or function's result to be evaluated at compile time, letting things like lookup tables be precomputed into Flash."
              ]
            },
            {
              "id": 314,
              "text": "What memory management strategies are used in embedded C++ to avoid heap fragmentation/non-determinism?",
              "options": [
                "Avoid the heap via static/pool allocation, override operator new/delete to route through a pool, and pre-allocate at initialization.",
                "Rely on the standard malloc/free implementation tuned for embedded targets.",
                "Use garbage collection triggered periodically by a low-priority task.",
                "Allocate all objects on the stack regardless of their lifetime."
              ]
            },
            {
              "id": 315,
              "text": "Why are exceptions often avoided in embedded/real-time C++, and what alternatives are used?",
              "options": [
                "Exceptions are avoided because the C++ standard forbids them on embedded targets.",
                "Exceptions add runtime overhead and non-deterministic timing and often lack ISR support; alternatives are error codes, optional-like patterns, or assert-based fail-fast handling.",
                "Exceptions are avoided only because they increase RAM usage, never Flash usage.",
                "Exceptions are avoided because they cannot be caught outside the function that throws them."
              ]
            },
            {
              "id": 316,
              "text": "How is RAII applied to hardware resource management?",
              "options": [
                "A pattern where resources are acquired in a destructor and released in the constructor.",
                "A pattern requiring manual release calls at every possible exit point in a function.",
                "A wrapper class acquires a hardware resource in its constructor and releases it in its destructor, guaranteeing cleanup on scope exit.",
                "A technique that defers all resource acquisition until the first use inside a loop."
              ]
            },
            {
              "id": 317,
              "text": "How can a state machine be implemented using templates/CRTP for efficiency?",
              "options": [
                "States are represented as integers in a switch statement with no type safety.",
                "States are dynamically allocated objects dispatched through a virtual base class only.",
                "States are represented purely as function pointers stored in a runtime array.",
                "Each state is a class/template parameter with CRTP-based dispatch to handle(), avoiding virtual function overhead while remaining type-safe."
              ]
            },
            {
              "id": 318,
              "text": "What is the difference between std::atomic and volatile?",
              "options": [
                "volatile only prevents compiler reordering/caching with no atomicity guarantee; std::atomic provides true atomic operations with memory ordering across threads/cores.",
                "volatile and std::atomic are functionally identical, just different syntax.",
                "std::atomic is used only for single-core hardware register access, while volatile is for multi-core synchronization.",
                "volatile guarantees atomicity but not visibility; std::atomic guarantees visibility but not atomicity."
              ]
            },
            {
              "id": 319,
              "text": "How do you implement a thread-safe singleton in modern C++?",
              "options": [
                "Achieved using a global raw pointer initialized in main() before any threads start.",
                "A function-local static variable's initialization is guaranteed thread-safe since C++11 (Meyer's Singleton), with the compiler generating the needed synchronization.",
                "Achieved by locking a mutex manually every time the singleton is accessed, with no compiler support.",
                "Achieved only by disabling interrupts during the entire program's lifetime."
              ]
            },
            {
              "id": 320,
              "text": "What are type traits and how are they used in generic embedded libraries?",
              "options": [
                "Runtime reflection utilities that inspect an object's type during execution.",
                "Macros that generate getters and setters automatically for class members.",
                "Compile-time type information (e.g., is_integral, is_same) used with SFINAE/if constexpr to select implementations for generic library code.",
                "A mechanism for converting between unrelated types at runtime with bounds checking."
              ]
            },
            {
              "id": 321,
              "text": "How can vtable overhead be reduced in performance-critical C++ code?",
              "options": [
                "Increase the number of virtual functions to let the compiler optimize the vtable layout.",
                "Store all vtables in a shared cache to reduce lookup time.",
                "Convert every class to use multiple inheritance to flatten the vtable.",
                "Use CRTP/templates instead of virtual functions where types are known at compile time, and mark classes/methods final to enable devirtualization."
              ]
            },
            {
              "id": 322,
              "text": "What is the PIMPL (Pointer to Implementation) idiom and why is it used?",
              "options": [
                "Hides implementation details behind an opaque pointer to a forward-declared class, reducing compile-time dependencies and providing ABI stability.",
                "A pattern that inlines all implementation details directly into the public header for speed.",
                "A technique for replacing pointers with references throughout a class's interface.",
                "A memory optimization that merges multiple classes into a single translation unit."
              ]
            },
            {
              "id": 323,
              "text": "How does modern C++ (C++11/14/17) improve embedded development compared to C?",
              "options": [
                "Modern C++ mandates garbage collection, simplifying memory management on constrained targets.",
                "Modern C++ adds RAII, constexpr, templates, scoped enums, and STL while still allowing costly features like exceptions to be avoided, achieving zero-cost abstractions.",
                "Modern C++ removes pointer arithmetic entirely in favor of safe references only.",
                "Modern C++'s main advantage is automatic multi-threading of all loops."
              ]
            },
            {
              "id": 324,
              "text": "What are common undefined behavior pitfalls specific to C++, such as strict aliasing?",
              "options": [
                "Strict aliasing guarantees that any pointer type can safely alias any other type.",
                "Strict aliasing only applies to arrays, not structs or scalar types.",
                "Accessing an object through an incompatible pointer type is undefined behavior, breaking naive type-punning; memcpy or unions should be used instead.",
                "Strict aliasing violations are always caught and rejected by the compiler at compile time."
              ]
            },
            {
              "id": 325,
              "text": "How is embedded C++ code unit tested, especially when hardware dependencies exist?",
              "options": [
                "Hardware dependencies are removed entirely by testing only on the physical target with a debugger attached.",
                "Testing is skipped for hardware-dependent code since it cannot be validated before deployment.",
                "All tests are run only through manual QA on the finished device.",
                "Hardware is abstracted behind interfaces and mocked/stubbed (e.g., with Google Mock) so business logic can be tested on a host machine, plus a separate hardware-in-the-loop suite."
              ]
            },
            {
              "id": 326,
              "text": "What does 'zero-cost abstraction' mean in C++?",
              "options": [
                "A language feature providing higher-level expressiveness with no runtime overhead compared to equivalent hand-written low-level code.",
                "A feature that eliminates all compile-time cost by deferring everything to runtime.",
                "An abstraction that always costs performance but improves code readability.",
                "A guarantee that dynamic memory allocation is free of fragmentation."
              ]
            },
            {
              "id": 327,
              "text": "How is ISR-safe C++ code written (avoiding new/exceptions inside an ISR)?",
              "options": [
                "ISR code should freely use STL containers since they are optimized for speed.",
                "ISR code avoids dynamic allocation, exceptions, and blocking STL operations, using pre-allocated buffers and deferring complex work to task-level code.",
                "ISR code should always throw an exception to signal errors immediately.",
                "ISR code should call new to allocate a fresh object for each interrupt occurrence."
              ]
            },
            {
              "id": 328,
              "text": "How can operator new/delete be overloaded for custom embedded memory management?",
              "options": [
                "Overloading operator new/delete is not possible in embedded C++ toolchains.",
                "Overloading replaces the compiler's type system with manual pointer arithmetic.",
                "Global or class-specific operator new/delete can route allocation through a custom pool/arena, giving deterministic, fragmentation-free allocation.",
                "Overloading operator new/delete disables RAII for all objects allocated with it."
              ]
            },
            {
              "id": 329,
              "text": "What design considerations go into building a Hardware Abstraction Layer (HAL) using C++ classes?",
              "options": [
                "A HAL should expose raw register addresses directly to application code for maximum speed.",
                "A HAL should use a single monolithic class covering all peripherals to simplify the API.",
                "A HAL should avoid RAII since destructors add unnecessary overhead to peripheral objects.",
                "A HAL defines clean abstract interfaces per peripheral, separates interface from implementation, avoids virtual overhead in hot paths, and uses RAII for resource management."
              ]
            }
          ]
        },
        {
          "name": "Digital Electronics",
          "type": "mcq",
          "questions": [
            {
              "id": 330,
              "text": "What are the key challenges in SoC design and IP integration?",
              "options": [
                "The main challenge is choosing the fabrication process node for the entire SoC.",
                "Key challenges include bus protocol compliance between IP blocks, clock/power domain crossing management, timing closure, and address map conflicts.",
                "The main challenge is minimizing the number of transistors used in each IP block.",
                "The main challenge is selecting a single clock frequency for the entire chip."
              ]
            },
            {
              "id": 331,
              "text": "Explain cache architecture — L1/L2, associativity, write-back vs write-through.",
              "options": [
                "L1 is always shared across cores while L2 is private to each core.",
                "Write-through caches update memory only when a dirty line is evicted; write-back updates immediately on every write.",
                "L1 is small/fast and closest to the core, associativity defines how many locations an address can map to, and write-back updates memory only on eviction while write-through updates immediately.",
                "Associativity refers to the physical distance between cache and main memory."
              ]
            },
            {
              "id": 332,
              "text": "How does memory hierarchy impact overall system performance?",
              "options": [
                "Memory hierarchy exists mainly to reduce the total amount of RAM needed on a chip.",
                "Performance depends only on main memory size, not cache hit rate.",
                "Registers and cache serve identical purposes and can be used interchangeably by the compiler.",
                "Memory hierarchy exploits locality of reference; cache hit rate heavily affects performance since misses stall the CPU accessing slower memory."
              ]
            },
            {
              "id": 333,
              "text": "Explain the AMBA bus protocols — AXI, AHB, and APB.",
              "options": [
                "AHB supports pipelined burst transfers for high bandwidth, AXI adds multiple outstanding transactions with separate read/write channels, and APB is a simple low-power bus for slow peripherals.",
                "AXI is used only for low-power peripherals, while APB handles high-performance interconnects.",
                "AHB and AXI are identical protocols with different naming conventions.",
                "APB supports pipelined multi-master transactions equivalent to AXI."
              ]
            },
            {
              "id": 334,
              "text": "What is DVFS (Dynamic Voltage and Frequency Scaling)?",
              "options": [
                "A technique that fixes voltage and frequency at manufacturing time for power efficiency.",
                "Dynamically adjusts operating voltage and clock frequency based on workload, lowering both at idle since dynamic power scales with V squared times frequency.",
                "A technique that only scales frequency, never voltage, to save power.",
                "A scheduling algorithm that assigns tasks to cores based on temperature readings."
              ]
            },
            {
              "id": 335,
              "text": "What are key DDR timing parameters to consider in a memory controller design?",
              "options": [
                "Parameters include only the clock frequency and supply voltage of the DDR chip.",
                "Parameters are fixed by the memory controller and never depend on the DDR chip's datasheet.",
                "Key parameters include CAS latency, tRCD, tRP, tRAS, and refresh interval, all set per the DDR chip's datasheet.",
                "Parameters include bus width and ECC configuration only."
              ]
            },
            {
              "id": 336,
              "text": "What hardware security features like secure boot and TrustZone provide?",
              "options": [
                "Secure boot encrypts all application data at rest; TrustZone accelerates cryptographic hashing.",
                "Secure boot only checks firmware version numbers; TrustZone isolates only the display controller.",
                "Secure boot is optional software running after the OS loads; TrustZone virtualizes multiple full operating systems.",
                "Secure boot cryptographically verifies each firmware stage from an immutable root of trust; TrustZone hardware-partitions secure and non-secure worlds."
              ]
            },
            {
              "id": 337,
              "text": "What hardware-level mechanisms support multi-core synchronization?",
              "options": [
                "Load-linked/store-conditional or compare-and-swap instructions, hardware spinlock peripherals, and cache coherency protocols like MESI.",
                "A single shared register that all cores poll continuously in a busy loop.",
                "Software-only mutexes implemented purely in the RTOS scheduler with no hardware support.",
                "A dedicated DMA channel that arbitrates all inter-core communication."
              ]
            },
            {
              "id": 338,
              "text": "What are key signal integrity considerations in high-speed PCB design?",
              "options": [
                "Signal integrity is mainly addressed by increasing trace width on all signals uniformly.",
                "Controlled impedance routing, proper termination, solid ground/power planes, and matched trace lengths for differential/parallel signals.",
                "Signal integrity is only relevant for power supply traces, not data lines.",
                "Adding more vias improves signal integrity by providing alternate return paths."
              ]
            },
            {
              "id": 339,
              "text": "What thermal design considerations apply to embedded systems?",
              "options": [
                "Thermal design is only relevant for processors running above 1 GHz.",
                "Thermal design considerations apply only to the power supply, not to digital logic.",
                "Estimate total power dissipation, ensure adequate heat dissipation paths, respect junction temperature limits, and implement throttling/shutdown if needed.",
                "Thermal issues are resolved solely by increasing clock frequency to finish tasks faster."
              ]
            },
            {
              "id": 340,
              "text": "What is hardware-software co-design?",
              "options": [
                "A methodology where software is written first and hardware is designed to match it afterward.",
                "A methodology restricted to FPGA-only projects with no software component.",
                "A methodology where hardware is finalized before any software development begins.",
                "Hardware and software are designed concurrently, partitioning functionality between custom hardware and software to optimize cost, performance, and power."
              ]
            },
            {
              "id": 341,
              "text": "What fault-tolerant design techniques are used in safety-critical hardware systems?",
              "options": [
                "Redundancy with voting logic, ECC memory, lockstep processing, watchdog timers, and built-in self-test routines.",
                "Fault tolerance is achieved solely by increasing clock margin on all signals.",
                "Fault tolerance relies only on software retry loops with no hardware support.",
                "Fault tolerance is achieved by disabling all non-essential peripherals during operation."
              ]
            },
            {
              "id": 342,
              "text": "What role does a hypervisor play in embedded multi-OS systems?",
              "options": [
                "A hypervisor merges multiple operating systems into a single unified kernel.",
                "A hypervisor partitions a single hardware platform to run multiple independent OSes concurrently with isolation and controlled shared hardware access.",
                "A hypervisor is used only to emulate legacy peripherals on new hardware.",
                "A hypervisor replaces the need for an RTOS entirely in real-time systems."
              ]
            },
            {
              "id": 343,
              "text": "What are the trade-offs between ASIC, FPGA, and SoC approaches at the architecture level?",
              "options": [
                "FPGAs always outperform ASICs in both power efficiency and unit cost at any volume.",
                "ASICs offer post-fabrication reconfigurability while FPGAs do not.",
                "ASIC offers best performance/power/area for high volume but high NRE cost; FPGA offers reconfigurability at higher per-unit cost; SoC balances software flexibility with dedicated hardware efficiency.",
                "SoC and ASIC are the same thing, differing only in marketing terminology."
              ]
            },
            {
              "id": 344,
              "text": "Why are functional safety standards like ISO 26262 and IEC 61508 significant?",
              "options": [
                "These standards only apply to consumer electronics with no safety implications.",
                "These standards mandate a specific microcontroller vendor for certified designs.",
                "These standards are optional style guides with no formal certification process.",
                "These standards define processes for hazard analysis, risk assessment (ASIL/SIL), and rigorous design/verification requirements for systems where malfunction could cause harm."
              ]
            },
            {
              "id": 345,
              "text": "How does JTAG debug architecture work for multi-core SoCs?",
              "options": [
                "A debug access port connects external tools to an on-chip debug bus, accessing each core's debug unit and supporting cross-triggering to halt cores together.",
                "JTAG can only debug one core at a time, requiring separate physical connectors per core.",
                "JTAG debug architecture is used exclusively for programming flash memory, not breakpoints.",
                "Multi-core SoCs use a separate, unrelated debug protocol for each core with no shared access port."
              ]
            },
            {
              "id": 346,
              "text": "What is a power tree and power sequencing in system design?",
              "options": [
                "A power tree is a diagram of clock distribution, unrelated to voltage regulation.",
                "A power tree diagrams distribution from the source through regulators to each rail; sequencing defines the required order/timing of rail power-up/down.",
                "Power sequencing refers only to the order in which peripherals are initialized in firmware.",
                "A power tree is only needed for battery-powered devices, not mains-powered ones."
              ]
            },
            {
              "id": 347,
              "text": "What EMI/EMC considerations are important in embedded hardware design?",
              "options": [
                "EMI is addressed solely by increasing the switching frequency of power converters.",
                "EMC compliance is achieved only through enclosure material selection, not PCB layout.",
                "Minimize loop areas with proper grounding/shielding, add filtering on power/signal lines, control edge rates, and meet regulatory emission/immunity standards.",
                "EMI/EMC considerations apply only to analog circuits, not digital signal lines."
              ]
            },
            {
              "id": 348,
              "text": "How does bus width affect system bandwidth?",
              "options": [
                "Bus width has no effect on bandwidth; only clock frequency determines throughput.",
                "Increasing bus width always reduces power consumption regardless of frequency.",
                "Bus bandwidth is inversely proportional to bus width.",
                "Bandwidth is proportional to bus width times clock frequency; doubling width roughly doubles throughput but increases pin count and power."
              ]
            },
            {
              "id": 349,
              "text": "What role does a DMA controller play in a complex SoC with multiple bus masters?",
              "options": [
                "The DMA controller acts as an additional bus master, autonomously moving data and arbitrating for bus access to offload the CPU.",
                "The DMA controller only operates when the CPU is halted, never concurrently with other masters.",
                "The DMA controller replaces the bus arbiter entirely in multi-master systems.",
                "The DMA controller can only be used for memory-to-memory transfers, not peripheral access."
              ]
            }
          ]
        },
        {
          "name": "Microcontroller (Peripherals & Memory)",
          "type": "mcq",
          "questions": [
            {
              "id": 350,
              "text": "What is the difference between memory-mapped peripherals and coprocessor-based peripherals?",
              "options": [
                "Memory-mapped peripherals require special instructions; coprocessor-based peripherals use normal pointer access.",
                "Both types are accessed identically through the same load/store instruction set with no distinction.",
                "Memory-mapped peripherals use normal load/store instructions to addresses; coprocessor-based peripherals use special instructions rather than memory addresses.",
                "Coprocessor-based peripherals are only used for GPIO, never for FPU or crypto functions."
              ]
            },
            {
              "id": 351,
              "text": "How is cache clean/invalidate managed for DMA buffers?",
              "options": [
                "The cache is invalidated before DMA writes and cleaned after DMA reads, in that order.",
                "Cache maintenance is unnecessary since DMA always bypasses the cache automatically.",
                "The CPU cache is cleaned only once at system startup, never during runtime DMA transfers.",
                "The cache is cleaned before DMA reads CPU-written data, and invalidated before the CPU reads DMA-written data."
              ]
            },
            {
              "id": 352,
              "text": "What is the difference between an MMU and an MPU?",
              "options": [
                "An MMU provides virtual-to-physical address translation for virtual memory and process isolation; an MPU only defines access permissions on fixed physical regions without translation.",
                "An MPU translates virtual addresses to physical ones, while an MMU only sets access permissions.",
                "MMU and MPU are two names for the same hardware unit used interchangeably.",
                "An MPU is found only on Cortex-A cores, while an MMU is found only on Cortex-M cores."
              ]
            },
            {
              "id": 353,
              "text": "How does virtual memory work differently on Cortex-A (with MMU) vs Cortex-M (without MMU)?",
              "options": [
                "Cortex-M supports full virtual memory via an optional software-emulated MMU.",
                "Cortex-A cores with an MMU support full per-process virtual memory via page tables; Cortex-M cores lack an MMU and run directly against physical addresses with only optional MPU protection.",
                "Both Cortex-A and Cortex-M provide identical virtual memory capabilities by default.",
                "Cortex-A cores cannot run general-purpose OSes like Linux due to lack of virtual memory."
              ]
            },
            {
              "id": 354,
              "text": "What is flash wear leveling and why is it needed?",
              "options": [
                "Wear leveling increases the write speed of flash memory by caching writes in RAM permanently.",
                "Wear leveling is a technique used only during flash chip manufacturing, not by application firmware.",
                "Wear leveling distributes write/erase operations evenly across physical blocks to extend flash lifetime, since cells degrade after limited erase/write cycles.",
                "Wear leveling encrypts flash contents to prevent unauthorized reads."
              ]
            },
            {
              "id": 355,
              "text": "What are external memory interfaces like FMC/FSMC and QSPI used for?",
              "options": [
                "FMC/FSMC is a serial interface for flash, while QSPI is a parallel bus for SRAM.",
                "QSPI is used only for debugging, never for connecting external memory.",
                "FMC/FSMC and QSPI are interchangeable names for the same peripheral interface.",
                "FMC/FSMC provides a parallel bus for external SRAM/NOR flash/LCD; QSPI provides a high-speed low-pin-count serial interface to external flash, often supporting execute-in-place."
              ]
            },
            {
              "id": 356,
              "text": "How does a bootloader manage multiple firmware images with fallback support?",
              "options": [
                "The bootloader tracks image validity, version, and boot-attempt metadata, falling back to a known-good previous image if validation fails or boot attempts are exceeded.",
                "The bootloader always boots the newest image regardless of validation status.",
                "The bootloader erases all firmware images and requires a full reflash if any single image is invalid.",
                "The bootloader relies on the application itself to decide which image to boot next."
              ]
            },
            {
              "id": 357,
              "text": "Explain the concept of a secure boot chain of trust.",
              "options": [
                "A chain of trust is established only at the final application stage, not the bootloader.",
                "A chain of trust starts from an immutable hardware root of trust that verifies each subsequent boot stage's signature before executing it, propagating trust end-to-end.",
                "A chain of trust relies on a shared symmetric key distributed to every device in the field.",
                "A chain of trust is optional and only required for internet-connected devices."
              ]
            },
            {
              "id": 358,
              "text": "How does ARM TrustZone for Cortex-M implement secure/non-secure separation?",
              "options": [
                "TrustZone-M requires a hypervisor to enforce separation between secure and non-secure code.",
                "TrustZone-M runs secure and non-secure code on physically separate cores.",
                "TrustZone-M partitions memory, peripherals, and interrupts into secure/non-secure regions via hardware (SAU/IDAU), with transitions through defined Non-Secure Callable entry points on a single core.",
                "TrustZone-M only isolates peripherals, not memory or interrupts."
              ]
            },
            {
              "id": 359,
              "text": "What system-level techniques enable low power design beyond simple sleep modes?",
              "options": [
                "Low power design relies solely on reducing the supply voltage to zero during operation.",
                "Techniques are limited to choosing a lower-power microcontroller model at design time.",
                "Low power design means disabling all peripherals permanently after initialization.",
                "Techniques include per-peripheral clock gating, DVFS, using DMA instead of CPU polling, lowpower peripheral modes, and maximizing time in deep sleep states."
              ]
            },
            {
              "id": 360,
              "text": "What is the difference between asymmetric and symmetric multi-core microcontroller architectures?",
              "options": [
                "In SMP, identical cores share memory and a single OS/scheduler; in AMP, different cores run independent firmware images communicating via IPC.",
                "In AMP, all cores must be identical and share a single scheduler instance.",
                "SMP requires each core to run a completely separate operating system image.",
                "AMP and SMP both require cores to be homogeneous, differing only in clock speed."
              ]
            },
            {
              "id": 361,
              "text": "What inter-processor communication (IPC) mechanisms are used between cores?",
              "options": [
                "IPC between cores is achieved solely through a shared UART peripheral.",
                "Common IPC mechanisms include shared memory regions, hardware mailbox/semaphore peripherals, and inter-core interrupts, often combined into a structured protocol.",
                "IPC requires an external network switch to route messages between cores.",
                "IPC mechanisms are limited to polling shared flash memory for new messages."
              ]
            },
            {
              "id": 362,
              "text": "How is memory protected between multiple RTOS tasks?",
              "options": [
                "Memory protection between tasks is achieved through compiler-enforced type checking alone.",
                "Each task gets a full virtual address space via the MMU, identical to a desktop OS process.",
                "An MPU assigns each task specific memory regions it may access, with out-of-region attempts triggering a fault caught by the RTOS's fault handler.",
                "Memory protection between tasks requires disabling interrupts during every context switch."
              ]
            },
            {
              "id": 363,
              "text": "How is a memory pool allocator designed for deterministic real-time allocation?",
              "options": [
                "A memory pool allocator dynamically resizes blocks at runtime to match request size exactly.",
                "A memory pool allocator is functionally identical to malloc but with a different name.",
                "A memory pool allocator searches a sorted free list, giving logarithmic-time allocation.",
                "A memory pool pre-allocates fixed-size blocks with free lists, giving O(1) allocation/deallocation unlike malloc's variable-time behavior."
              ]
            },
            {
              "id": 364,
              "text": "How should a layered peripheral driver architecture (HAL) be designed?",
              "options": [
                "A layered design separates a low-level register access layer, a peripheral driver layer, and an application/middleware layer, improving portability and testability.",
                "A layered design combines register access and application logic into a single monolithic module for speed.",
                "A layered HAL requires each layer to directly access hardware registers for consistency.",
                "A layered design eliminates the need for interrupt handling in the driver layer."
              ]
            },
            {
              "id": 365,
              "text": "What considerations go into designing a robust CAN/Ethernet communication stack?",
              "options": [
                "A robust stack relies solely on increasing baud rate to avoid errors.",
                "Considerations include bus-off/link-down recovery, buffering for bursts, timeout/retry mechanisms, protocol-layer separation, and interrupt/DMA-driven reception to avoid missed messages.",
                "A robust stack avoids using interrupts entirely, relying only on polling for reliability.",
                "A robust stack requires disabling error detection to maximize throughput."
              ]
            },
            {
              "id": 366,
              "text": "How is timing-critical peripheral synchronization handled across clock domains?",
              "options": [
                "Cross-domain synchronization is achieved purely through software polling loops with no hardware assistance.",
                "A single flip-flop synchronizer is sufficient and preferred over any multi-stage approach.",
                "Techniques include 2-flop synchronizers for control signals, asynchronous FIFOs for data bursts, shared reference clocks/PLLs, and hardware trigger/sync features.",
                "Clock domain crossing is avoided entirely by running all peripherals from a single unified clock always."
              ]
            },
            {
              "id": 367,
              "text": "How is EEPROM emulation implemented in flash-only microcontrollers?",
              "options": [
                "EEPROM emulation requires an external EEPROM chip connected via I2C or SPI.",
                "EEPROM emulation overwrites the same flash address repeatedly, relying on the flash's built-in wear leveling.",
                "EEPROM emulation stores all variables in RAM only, with no persistence across power cycles.",
                "EEPROM emulation uses reserved flash sectors as a circular log of variable updates, scanning for the most recent valid record and periodically compacting the sector."
              ]
            },
            {
              "id": 368,
              "text": "What is DMA scatter-gather operation?",
              "options": [
                "A linked list of buffer descriptors lets a single DMA operation transfer across multiple noncontiguous memory regions without CPU intervention between segments.",
                "Scatter-gather DMA requires the CPU to manually trigger each segment transfer individually.",
                "Scatter-gather DMA only works with a single contiguous buffer, contrary to its name.",
                "Scatter-gather DMA is a software-only technique with no dedicated hardware descriptor support."
              ]
            },
            {
              "id": 369,
              "text": "Why are memory barriers necessary in ARM Cortex-M/A systems?",
              "options": [
                "Memory barriers are needed only on Cortex-A cores; Cortex-M cores never reorder memory accesses.",
                "Barriers like DMB/DSB/ISB ensure ordering of memory and instruction operations since both compiler and out-of-order hardware can reorder accesses, needed e.g. before enabling an interrupt after register configuration.",
                "Memory barriers are purely a software convention with no corresponding hardware instructions.",
                "Memory barriers eliminate the need for cache invalidation during DMA transfers."
              ]
            }
          ]
        },
        {
          "name": "RTOS",
          "type": "mcq",
          "questions": [
            {
              "id": 370,
              "text": "What is involved in porting an RTOS kernel to a new architecture?",
              "options": [
                "Porting requires implementing the context-switch routine, tick timer setup, interrupt configuration, task stack initialization, and critical section primitives per the RTOS's porting layer.",
                "Porting only requires recompiling the existing code with a new compiler target flag.",
                "Porting is handled automatically by the RTOS without any architecture-specific code.",
                "Porting requires rewriting the entire scheduler algorithm from scratch for each architecture."
              ]
            },
            {
              "id": 371,
              "text": "What is the difference between SMP and AMP scheduling in multi-core RTOS?",
              "options": [
                "SMP requires each core to run a separate RTOS instance, while AMP shares one scheduler across cores.",
                "SMP uses a single RTOS instance/scheduler dynamically assigning tasks across cores with shared, locked memory; AMP runs independent RTOS instances per core with statically assigned tasks communicating via IPC.",
                "AMP and SMP are identical scheduling models differing only in naming convention.",
                "SMP is used only on single-core systems, while AMP applies exclusively to multi-core systems."
              ]
            },
            {
              "id": 372,
              "text": "How is memory partitioned in safety-certified RTOS systems (e.g., ARINC 653-style)?",
              "options": [
                "Partitioning is achieved only through software convention with no MMU/MPU enforcement.",
                "Only temporal partitioning is required; spatial partitioning is optional for certification.",
                "Safety-certified RTOS systems enforce spatial partitioning (MMU/MPU-protected dedicated memory) and temporal partitioning (fixed time slices via static schedule) so one partition's failure cannot affect others.",
                "Partitioning applies only to I/O devices, not to task memory or CPU time."
              ]
            },
            {
              "id": 373,
              "text": "What is Worst-Case Execution Time (WCET) analysis?",
              "options": [
                "WCET analysis measures the average execution time across typical workloads.",
                "WCET analysis is performed only after deployment, using field failure data.",
                "WCET analysis determines the minimum execution time achievable under ideal conditions.",
                "WCET analysis determines the maximum possible execution time across all inputs and hardware states, guaranteeing tasks meet deadlines, via static analysis or measurement with safety margins."
              ]
            },
            {
              "id": 374,
              "text": "What do RTOS-relevant certification standards like DO-178C, IEC 61508, and ISO 26262 require?",
              "options": [
                "These standards require traceable development processes, structural code coverage analysis, and rigorous verification matched to the criticality level, often needing a certifiable RTOS kernel.",
                "These standards require only a final acceptance test with no traceability to requirements.",
                "These standards apply only to hardware design, not to RTOS or application software.",
                "These standards mandate open-source licensing for all certified RTOS kernels."
              ]
            },
            {
              "id": 375,
              "text": "How would you design a fault-tolerant RTOS application?",
              "options": [
                "Fault tolerance is achieved solely by increasing task priorities across the board.",
                "Design includes watchdog timers, task heartbeat monitoring, MPU-based task isolation, graceful degradation, and redundancy with voting for the most critical functions.",
                "Fault tolerance requires disabling the scheduler during critical operations.",
                "Fault tolerance is achieved only through hardware redundancy, never software techniques."
              ]
            },
            {
              "id": 376,
              "text": "How is the priority ceiling protocol implemented in resource management?",
              "options": [
                "The priority ceiling protocol lowers a task's priority to the resource's minimum priority while it holds a lock.",
                "The priority ceiling protocol only applies to interrupt handlers, never to regular tasks.",
                "Each resource is assigned a ceiling priority equal to the highest priority task that may lock it; a locking task's priority is raised to this ceiling, preventing priority inversion.",
                "The priority ceiling protocol requires all tasks to run at the same fixed priority."
              ]
            },
            {
              "id": 377,
              "text": "What are the trade-offs between using an RTOS versus bare-metal for an application?",
              "options": [
                "An RTOS always has lower memory overhead than a bare-metal superloop design.",
                "Bare-metal designs are preferred for any application with more than one concurrent responsibility.",
                "An RTOS eliminates the need for interrupt handling entirely.",
                "An RTOS provides structured task management and synchronization at the cost of overhead/complexity; bare-metal offers minimal overhead and full determinism but scales poorly with complexity."
              ]
            },
            {
              "id": 378,
              "text": "How does an RTOS handle power management, such as tickless idle?",
              "options": [
                "In tickless idle, the RTOS calculates the time until the next event and wakes the CPU only then, maximizing deep sleep duration instead of waking on every periodic tick.",
                "Tickless idle disables the scheduler entirely until a hardware reset occurs.",
                "Tickless idle increases the tick rate to respond faster to events, using more power.",
                "Tickless idle is only available on single-task RTOS configurations."
              ]
            },
            {
              "id": 379,
              "text": "What debugging techniques are used for RTOS-based systems?",
              "options": [
                "Debugging RTOS systems relies solely on generic single-threaded debuggers with no task awareness.",
                "Techniques include task-aware debugging showing all tasks' state/stack, RTOS-aware trace tools visualizing task switching and interrupts, and runtime statistics like stack high-water marks and pertask CPU usage.",
                "RTOS debugging is limited to reading raw memory dumps with no tooling support.",
                "RTOS debugging requires disabling the RTOS and reverting to bare-metal execution temporarily."
              ]
            }
          ]
        },
        {
          "name": "Linux",
          "type": "mcq",
          "questions": [
            {
              "id": 380,
              "text": "What does the 'strace' command do?",
              "options": [
                "strace compiles a program with debug symbols embedded for gdb.",
                "strace monitors network traffic at the packet level, similar to tcpdump.",
                "strace traces system calls and signals made by a running program, useful for debugging failed file access or permission errors.",
                "strace measures only CPU cycle counts for a given process."
              ]
            },
            {
              "id": 381,
              "text": "What is 'gdb' used for?",
              "options": [
                "gdb is a build tool used to compile and link embedded firmware images.",
                "gdb only works on host machines and cannot connect to remote embedded targets.",
                "gdb is a static analysis tool that scans source code for potential bugs.",
                "gdb (GNU Debugger) sets breakpoints, steps through code, inspects variables/memory, and analyzes crashes, commonly used remotely via gdbserver or a JTAG/SWD probe on embedded targets."
              ]
            },
            {
              "id": 382,
              "text": "What is 'valgrind' used for?",
              "options": [
                "Valgrind's Memcheck tool detects memory errors such as leaks, use-after-free, and out-of-bounds access by running the program in an instrumented environment.",
                "Valgrind is a static code analyzer that runs without executing the program.",
                "Valgrind is used to measure network latency between embedded devices.",
                "Valgrind replaces gdb for setting breakpoints and stepping through code."
              ]
            },
            {
              "id": 383,
              "text": "What does 'crontab' do?",
              "options": [
                "crontab manages user permissions for scheduled system services.",
                "crontab manages scheduled recurring tasks (cron jobs) defined by a schedule expression plus the command to run.",
                "crontab lists currently running background processes and their PIDs.",
                "crontab configures firewall rules for scheduled network access windows."
              ]
            },
            {
              "id": 384,
              "text": "What does 'lsof' do?",
              "options": [
                "lsof lists all installed software packages on the system.",
                "lsof displays the current CPU and memory load averages.",
                "lsof lists files currently opened by processes, including sockets and devices, useful for finding which process holds a file or port.",
                "lsof synchronizes files between a local and remote directory."
              ]
            },
            {
              "id": 385,
              "text": "What does 'iptables' do?",
              "options": [
                "iptables manages disk partition tables for mounted filesystems.",
                "iptables displays real-time network bandwidth usage per interface.",
                "iptables schedules recurring network diagnostic jobs.",
                "iptables configures the Linux kernel's netfilter firewall rules, controlling packet filtering, forwarding, and NAT."
              ]
            },
            {
              "id": 386,
              "text": "What does 'journalctl' do?",
              "options": [
                "journalctl queries and displays logs collected by systemd's journal, e.g., showing per-service logs or following new entries in real time.",
                "journalctl compiles kernel modules for logging subsystems.",
                "journalctl is used to rotate and compress old log files only.",
                "journalctl configures which services start automatically at boot."
              ]
            },
            {
              "id": 387,
              "text": "What do 'mount' and 'umount' do?",
              "options": [
                "mount formats a new filesystem on a device; umount erases its contents.",
                "mount attaches a filesystem from a device/partition/network share to a directory, making it accessible; umount detaches it before removing storage.",
                "mount and umount are used exclusively for managing network firewall rules.",
                "mount only works on read-only filesystems; umount only works on writable ones."
              ]
            },
            {
              "id": 388,
              "text": "What does 'rsync' do?",
              "options": [
                "rsync compresses files into a single archive for backup storage.",
                "rsync is used to schedule recurring synchronization jobs via cron only.",
                "rsync efficiently synchronizes files/directories by transferring only the differences between source and destination, locally or over SSH.",
                "rsync mirrors an entire disk image bit-for-bit, ignoring file-level differences."
              ]
            },
            {
              "id": 389,
              "text": "What do 'awk' and 'sed' do?",
              "options": [
                "awk performs search-and-replace on a stream; sed extracts columns from structured text.",
                "awk and sed are GUI-based text editors for embedded Linux systems.",
                "awk is used only for arithmetic in shell scripts; sed is used only for file renaming.",
                "awk is a pattern-scanning language for extracting/manipulating text columns, while sed performs stream transformations like search-and-replace."
              ]
            }
          ]
        },
        {
          "name": "Coding",
          "type": "coding",
          "questions": [
            {
              "id": 390,
              "text": "Write a program to implement Bubble Sort in C."
            },
            {
              "id": 391,
              "text": "Write a program to implement Heap Sort using heapify in C."
            }
          ]
        },
        {
          "name": "Firmware Upgrade",
          "type": "mcq",
          "questions": [
            {
              "id": 392,
              "text": "What is a differential (delta) firmware update and why is it used?",
              "options": [
                "A delta update transmits the entire new firmware image but skips the signature verification step.",
                "A delta update requires the device to have two full firmware images stored before applying it.",
                "A delta update transmits only the binary difference between current and new firmware (via algorithms like bsdiff), reducing size/bandwidth at the cost of needing a patching algorithm ondevice.",
                "A delta update is only used for encrypting firmware images during transit."
              ]
            },
            {
              "id": 393,
              "text": "Describe an end-to-end secure firmware update process.",
              "options": [
                "The device downloads unsigned firmware and verifies it only after installation completes.",
                "The process relies solely on TLS for transport with no cryptographic signature on the firmware image itself.",
                "The firmware is signed by the device itself, then verified against a key generated at first boot.",
                "The firmware is signed by the vendor, downloaded over TLS, verified with a stored public key, checked against an anti-rollback counter, written to an inactive partition, and only activated after a final integrity check."
              ]
            },
            {
              "id": 394,
              "text": "What is anti-rollback protection and why is it needed?",
              "options": [
                "A monotonic counter stored in secure/OTP memory prevents downgrading to an older, vulnerable firmware version, with the bootloader rejecting images below the minimum allowed version.",
                "Anti-rollback protection is achieved by keeping every historical firmware version available for the user to select.",
                "Anti-rollback protection encrypts the firmware image so older versions cannot be decrypted at all.",
                "Anti-rollback protection relies on a checksum that changes with every reboot cycle."
              ]
            },
            {
              "id": 395,
              "text": "How would you design a recovery/fallback mechanism for a failed OTA update?",
              "options": [
                "A single-bank scheme where the old firmware is erased immediately before writing the new image.",
                "A dual-bank (A/B) scheme writes new firmware to the inactive bank, boots it provisionally, and automatically reverts to the previous known-good bank if it fails to confirm boot success within a timeout.",
                "A recovery mechanism that requires manual user intervention via a physical button for every update.",
                "A mechanism that relies solely on a checksum stored in RAM, lost on every reset."
              ]
            },
            {
              "id": 396,
              "text": "What challenges arise when updating firmware on multi-core/multi-processor systems?",
              "options": [
                "The only challenge is ensuring each processor has enough flash space for the new image.",
                "Multi-core updates are simpler than single-core since each core can update fully independently with no coordination.",
                "Challenges include version skew breaking inter-processor communication, coordinating update sequence/reboot timing across processors, and maintaining atomic all-or-nothing consistency.",
                "The only challenge is selecting which processor boots first after a cold reset."
              ]
            }
          ]
        },
        {
          "name": "Cybersecurity",
          "type": "mcq",
          "questions": [
            {
              "id": 397,
              "text": "What is secure boot and why is it important in embedded systems?",
              "options": [
                "Secure boot encrypts firmware storage to prevent reverse engineering.",
                "Secure boot only verifies firmware after the OS has fully loaded.",
                "Secure boot is a purely software-level feature requiring no hardware root of trust.",
                "Secure boot cryptographically verifies the authenticity and integrity of firmware at each boot stage before executing it, preventing unauthorized code and establishing a trusted foundation."
              ]
            },
            {
              "id": 398,
              "text": "What is a chain of trust?",
              "options": [
                "A sequence of verification steps starting from an immutable hardware root, where each stage verifies the next before execution, propagating trust from boot through runtime.",
                "A chain of trust refers to the sequence of developers who reviewed and approved the firmware release.",
                "A chain of trust is established only once at manufacturing and never re-verified afterward.",
                "A chain of trust is a network protocol for establishing TLS sessions between devices."
              ]
            },
            {
              "id": 399,
              "text": "What is threat modeling and when should it be performed?",
              "options": [
                "Threat modeling is performed only after a security breach has occurred, to assign blame.",
                "A structured process identifying threats, attack vectors, and vulnerabilities (e.g., using STRIDE) and defining mitigations, performed early in design and revisited on major changes.",
                "Threat modeling is a purely automated static analysis scan requiring no human input.",
                "Threat modeling is performed only once, at product end-of-life, to document known issues."
              ]
            },
            {
              "id": 400,
              "text": "What is the difference between symmetric and asymmetric encryption in firmware security?",
              "options": [
                "Symmetric encryption uses a public/private key pair, while asymmetric encryption uses a single shared secret key.",
                "Asymmetric encryption is always faster than symmetric encryption for bulk data.",
                "Symmetric encryption uses one shared secret key for both encryption/decryption (fast, e.g. AES); asymmetric uses a public/private key pair, commonly used for firmware signature verification.",
                "Symmetric and asymmetric encryption differ only in key length, not in key structure."
              ]
            },
            {
              "id": 401,
              "text": "What is a Hardware Security Module (HSM) or secure element?",
              "options": [
                "An HSM is a software library that emulates cryptographic hardware for testing.",
                "An HSM stores keys in the same memory space as the main application for fast access.",
                "An HSM is required only for asymmetric encryption, never for symmetric operations.",
                "An HSM or secure element is a dedicated, tamper-resistant hardware component that securely stores keys and performs crypto operations in isolation, protecting keys even if the main system is compromised."
              ]
            },
            {
              "id": 402,
              "text": "What secure coding practices help prevent buffer overflow attacks in embedded C?",
              "options": [
                "Validate input lengths, use bounded functions like strncpy/snprintf instead of strcpy/sprintf, enable stack canaries, and use static analysis tools.",
                "Rely exclusively on run-time bounds checking provided automatically by the C standard.",
                "Avoid buffer overflow by disabling all length checks to improve performance.",
                "Use only unbounded functions like strcpy/sprintf since they are simpler to audit."
              ]
            },
            {
              "id": 403,
              "text": "What is fuzz testing and what role does it play in embedded security?",
              "options": [
                "Fuzz testing manually crafts a small set of known-valid test cases for regression testing.",
                "Fuzz testing automatically generates large volumes of random or malformed input fed to interfaces to discover crashes or memory corruption that traditional testing might miss.",
                "Fuzz testing is a static analysis technique that never executes the target program.",
                "Fuzz testing measures code coverage only, without generating any new inputs."
              ]
            },
            {
              "id": 404,
              "text": "What are side-channel attacks (timing, power analysis)?",
              "options": [
                "Side-channel attacks break cryptographic algorithms directly by finding a flaw in the math.",
                "Side-channel attacks require physical destruction of the chip to extract keys.",
                "Side-channel attacks extract sensitive data from indirect physical characteristics like timing or power consumption patterns, mitigated by constant-time algorithms and power balancing.",
                "Side-channel attacks only apply to network protocols, not to cryptographic hardware."
              ]
            },
            {
              "id": 405,
              "text": "What is the difference between authentication and authorization in an embedded security context?",
              "options": [
                "Authentication determines permitted actions, while authorization verifies identity.",
                "Authentication and authorization are the same process performed at different times.",
                "Authorization must always occur before authentication in a secure system.",
                "Authentication verifies identity (who/what it is); authorization determines what an alreadyauthenticated entity is permitted to do."
              ]
            },
            {
              "id": 406,
              "text": "What is involved in a security-focused code review or static analysis for vulnerabilities?",
              "options": [
                "Checks for unchecked buffer operations, hardcoded credentials, insecure crypto use, and integer overflow, often supplemented by SAST tools with security-specific rule sets.",
                "Focuses exclusively on code formatting and naming conventions.",
                "Relies solely on manual review with no automated tooling support.",
                "Checks only for compiler warnings, since those cover all security-relevant issues."
              ]
            }
          ]
        },
        {
          "name": "Git",
          "type": "mcq",
          "questions": [
            {
              "id": 407,
              "text": "What is the difference between Git and GitHub?",
              "options": [
                "Git is a cloud hosting platform, while GitHub is the underlying command-line tool.",
                "Git is a distributed version control system used locally to track code changes; GitHub is a cloud hosting platform built around Git adding PRs, issue tracking, and CI/CD.",
                "Git and GitHub are two names for the same product marketed differently.",
                "Git only works with GitHub as its exclusive remote hosting provider."
              ]
            },
            {
              "id": 408,
              "text": "Explain a common git branching strategy such as Git Flow or feature branching.",
              "options": [
                "Feature branching requires all developers to commit directly to main without branches.",
                "Git Flow eliminates the need for pull requests entirely.",
                "Feature branching develops each feature on its own branch merged via PR; Git Flow extends this with long-lived main/develop branches plus feature/release/hotfix branches.",
                "Git Flow and feature branching both forbid the use of a develop branch."
              ]
            },
            {
              "id": 409,
              "text": "What is a pull request and what is its role in the code review process?",
              "options": [
                "A pull request automatically merges code with no review step required.",
                "A pull request is used only to delete branches after a merge completes.",
                "A pull request is a Git-only feature with no GitHub-specific tooling involved.",
                "A pull request proposes merging changes from one branch into another, providing a space to review the diff, comment, request changes, and run CI checks before merging."
              ]
            },
            {
              "id": 410,
              "text": "What is the difference between git merge and git rebase?",
              "options": [
                "git merge creates a merge commit preserving full branch history; git rebase replays commits to create linear history but rewrites hashes, so it should be avoided on shared branches after pushing.",
                "git rebase preserves all merge commits, while git merge creates a linear history.",
                "git merge and git rebase produce identical commit histories with different command names.",
                "git rebase is safe to use on shared branches at any time with no side effects."
              ]
            },
            {
              "id": 411,
              "text": "What is a git merge conflict and how is it resolved?",
              "options": [
                "A merge conflict is resolved automatically by Git choosing the most recent commit's version.",
                "A merge conflict occurs when Git cannot auto-reconcile changes to the same lines in two branches; it's resolved by manually editing the conflict-marked sections, then staging and committing.",
                "A merge conflict can only be resolved by discarding one of the two branches entirely.",
                "A merge conflict occurs only when merging branches from different repositories."
              ]
            },
            {
              "id": 412,
              "text": "What is the difference between git commit, push, pull, and fetch?",
              "options": [
                "git push downloads changes from the remote, while git pull uploads local commits.",
                "git fetch automatically merges downloaded changes into the current branch, unlike git pull.",
                "git commit saves staged changes locally; git push uploads commits to remote; git fetch downloads without merging; git pull is fetch plus an automatic merge/rebase.",
                "git commit and git push are synonyms for the same operation in modern Git."
              ]
            },
            {
              "id": 413,
              "text": "What is a .gitignore file used for?",
              "options": [
                ".gitignore lists files that must always be committed before every push.",
                ".gitignore is used to encrypt sensitive files before they are committed.",
                ".gitignore defines which branches are allowed to be merged into main.",
                ".gitignore specifies intentionally untracked file patterns, like build artifacts and IDE config, that Git should not track or stage."
              ]
            },
            {
              "id": 414,
              "text": "What are GitHub Actions and how are they used for CI/CD?",
              "options": [
                "GitHub Actions is a workflow automation platform that runs jobs like build/test/deploy in response to repository events, configured via YAML files.",
                "GitHub Actions is a standalone desktop application unrelated to repository events.",
                "GitHub Actions only supports manual triggering and cannot run on push or PR events.",
                "GitHub Actions replaces the need for a .gitignore file in a repository."
              ]
            },
            {
              "id": 415,
              "text": "What does git cherry-pick do?",
              "options": [
                "git cherry-pick merges an entire branch's history into another branch at once.",
                "git cherry-pick applies the changes from a specific commit onto another branch without merging the whole branch, useful for porting a fix to a release branch.",
                "git cherry-pick deletes a specific commit from the repository's history permanently.",
                "git cherry-pick is used only to rename branches, not to move commits."
              ]
            },
            {
              "id": 416,
              "text": "What are git tags and how are they used in firmware versioning?",
              "options": [
                "Git tags are temporary markers that are automatically deleted after each release.",
                "Git tags can only be applied to the most recent commit on the main branch.",
                "A git tag marks a specific commit with a fixed label like v1.2.0; annotated tags store metadata and can be GPG-signed, enabling traceable mapping between firmware versions and source code.",
                "Git tags function identically to branches and can receive new commits after creation."
              ]
            }
          ]
        }
      ]
    }
  }
};
(window.EVAL_REGISTRY = window.EVAL_REGISTRY || {})[EVAL_DATA.domain] = EVAL_DATA;
