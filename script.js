/* =========================
   OPEN WEBSITE
========================= */

function openWebsite() {
    document.getElementById("website").scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================
   MUSIC
========================= */

const musicButton = document.getElementById("music-button");
const birthdaySong = document.getElementById("birthday-song");

const songOptions = document.querySelectorAll(".song-option");
const currentSongTitle = document.getElementById("current-song-title");
const currentSongArtist = document.getElementById("current-song-artist");

if (musicButton && birthdaySong) {

    // PLAY / PAUSE
    musicButton.addEventListener("click", function () {

        if (birthdaySong.paused) {

            birthdaySong.play()
                .then(function () {
                    musicButton.textContent = "Ⅱ";
                })
                .catch(function (error) {
                    console.error("Could not play audio:", error);
                });

        } else {

            birthdaySong.pause();
            musicButton.textContent = "▶";

        }

    });


    // SONG SELECTION
    songOptions.forEach(function (button) {

        button.addEventListener("click", function () {

            const song = button.getAttribute("data-song");
            const title = button.getAttribute("data-title");
            const artist = button.getAttribute("data-artist");

            const wasPlaying = !birthdaySong.paused;

            birthdaySong.pause();

            birthdaySong.src = song;
            birthdaySong.load();

            currentSongTitle.textContent = title;
            currentSongArtist.textContent = "— " + artist;

            songOptions.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");


            if (wasPlaying) {

                birthdaySong.play()
                    .then(function () {
                        musicButton.textContent = "Ⅱ";
                    })
                    .catch(function (error) {
                        console.error("Could not play audio:", error);
                    });

            } else {

                musicButton.textContent = "▶";

            }

        });

    });

}


/* =========================
   SLIDE 3 — REASONS
========================= */

const reasons = {

    curiosity: {
        number: "01",
        title: "your curiosity",
        text: `
            <p>
                What I love about you is how curious you are about me.
            </p>

            <p>
                I never really paid much attention to myself before you.
                So when you ask me something about myself, sometimes I'm
                just sitting there like... I don't know.
            </p>

            <p>
                And then I'll think about it for the next few days.
                Why do I feel this way? Why do I do that?
                And somehow, while I'm figuring myself out,
                I'm finding out a little more about who I am too.
            </p>

            <p>
                So I think that's one of the nicest things about loving
                you and being loved by you. I'm finding myself along
                the way.
            </p>

            <p class="display-last">
                I hope you never stop being curious about me.
            </p>
        `
    },

    ordinary: {
        number: "02",
        title: "the ordinary things",
        text: `
            <p>
                You're so sweet and kind and gentle and patient.
                And you're so fun.
            </p>

            <p>
                You can tell the most boring story imaginable and somehow
                I still can't help but laugh.
            </p>

            <p>
                I don't think I'd need anything grand with you.
                I feel like grocery shopping, cleaning, running errands,
                doing random stuff... it'd all still be fun because
                you're there.
            </p>

            <p class="display-last">
                I think that's what matters more.
            </p>
        `
    },

    "bad-days": {
        number: "03",
        title: "you make bad days better",
        text: `
            <p>
                Sometimes I'm down or sad and you probably don't even
                know it.
            </p>

            <p>
                And then you start telling me about your day and somehow
                I feel better just from talking to you.
            </p>

            <p class="display-last">
                you don't even have to try.
            </p>
        `
    },

    shy: {
        number: "04",
        title: "you getting shy",
        text: `
            <p>
                You get so shy when I compliment you 😭
            </p>

            <p>
                Like that time you sent me your pictures and I obviously
                got distracted, and you started panicking and telling me
                to lock back in and pay attention to what I was saying.
            </p>

            <p class="display-last">
                it was soooo cute. sorry.
            </p>
        `
    },

    videos: {
        number: "05",
        title: "the little videos",
        text: `
            <p>
                You started sending me little videos of yourself doing
                random things recently.
            </p>

            <p>
                And I swear I've watched some of them so many times.
            </p>

            <p class="display-last">
                they're always somewhere in my head.
            </p>
        `
    },

    laugh: {
        number: "06",
        title: "your laugh",
        text: `
            <p>
                your laugh.
            </p>

            <p class="display-last">
                that's literally it. i love your laugh.
            </p>
        `
    },

    smile: {
        number: "07",
        title: "your smile",
        text: `
            <p>
                your smile.
            </p>

            <p class="display-last">
                yeah. that one gets me too.
            </p>
        `
    },

    rage: {
        number: "08",
        title: "your little rage-bait giggles",
        text: `
            <p>
                the little giggles you do when you know you're
                successfully annoying me.
            </p>

            <p class="display-last">
                unfortunately, they're cute.
            </p>
        `
    },

    "yes-maam": {
        number: "09",
        title: 'the "yes ma\'am" thing',
        text: `
            <p>
                when you say yes ma'am.
            </p>

            <p>
                and when you ask me before doing something.
            </p>

            <p class="display-last">
                i notice that stuff, yk.
            </p>
        `
    }

};


function showReason(reasonName) {

    const reason = reasons[reasonName];

    if (!reason) {
        console.log("Reason not found:", reasonName);
        return;
    }

    const numberElement = document.getElementById("popup-number");

    if (numberElement) {
        numberElement.textContent = reason.number;
    }

    document.getElementById("popup-title").textContent = reason.title;

    document.getElementById("popup-text").innerHTML = reason.text;

    document.getElementById("reason-popup").classList.add("active");

}


function closeReason() {

    document.getElementById("reason-popup").classList.remove("active");

}


function showFinalReason() {

    document.getElementById("final-reason").classList.add("show");

}


/* =========================
   SLIDE 4 — LITTLE MEMORIES
========================= */

const memories = {

    underwhelming: {
        title: "underwhelming.",
        text: `
            <p>
                I still think about the time I called your presence
                underwhelming.
            </p>

            <p>
                You were SO offended and somehow we ended up laughing
                about it for like an hour while I kept bringing it up.
            </p>

            <p class="memory-last">
                I was absolutely not going to let you recover from that.
            </p>
        `
    },


    movie: {
        title: "the movie food heist",
        text: `
            <p>
                One of our early calls where you were telling me about
                how you somehow managed to sneak food into the movies.
            </p>

            <p>
                I don't even remember why that story stuck with me.
                It just did.
            </p>

            <p class="memory-last">
                the fact that you were casually telling me about your
                tiny cinema crime like it was completely normal 😭
            </p>
        `
    },


    babynames: {
        title: "random names",
        text: `
            <p>
                Somehow we started talking about random names.
            </p>

            <p>
                And then we just... kept talking about them.
                For like an entire hour.
            </p>

            <p class="memory-last">
                absolutely normal conversation btw.
            </p>
        `
    },


    notes: {
        title: "your little notes",
        text: `
            <p>
                I love that you write little things I like and don't like
                into your notes.
            </p>

            <p>
                It's such a small thing, but I notice it.
                You actually remembering those little details about me
                makes me feel really loved.
            </p>

            <p class="memory-last">
                you pay attention. I like that about you.
            </p>
        `
    },


    stickers: {
        title: "“you're my stickers”",
        text: `
            <p>
                You made a whole collection of my stupid pictures into
                Instagram stickers.
            </p>

            <p>
                And when I asked you why you did that, you said,
                “yk how kids loves stickers? youre my stickers”
            </p>

            <p class="memory-last">
                unfortunately one of the cutest things you've ever said.
            </p>
        `
    },


    eightdecades: {
        title: "eight decades minimum",
        text: `
            <p>
                You saying you'd listen to my voice for eight decades
                minimum.
            </p>

            <p class="memory-last">
                eight decades is a very specific commitment btw.
            </p>
        `
    },


    hug: {
        title: "when you wanted a hug",
        text: `
            <p>
                I don't even remember what the conversation was about.
                You just said you wanted to hug me for some reason.
            </p>

            <p>
                And I don't know.
                That one stayed with me.
            </p>

            <p class="memory-last">
                I wanted one too.
            </p>
        `
    },


    working: {
        title: "“is it working?”",
        text: `
            <p>
                You trying to bullshit your way out of situations when
                you already know I'm not buying it.
            </p>

            <p>
                And then, after giving me the world's worst excuse,
                you ask:
            </p>

            <p class="memory-last">
                “is it working?”
            </p>
        `
    },


    victorian: {
        title: "the 18-picture incident",
        text: `
            <p>
                I wrote you that ridiculously long Victorian-English
                paragraph about how you owed me like 18 pictures.
            </p>

            <p>
                I genuinely wasn't expecting you to play along with it.
                But you did.
            </p>

            <p class="memory-last">
                that was so cute. I was not prepared.
            </p>
        `
    },


    future: {
        title: "the future",
        text: `
            <p>
                I love when you talk about your future and I'm just
                casually there somewhere in it.
            </p>

            <p>
                Or when you talk about us actually meeting and doing
                things together in real life.
            </p>

            <p class="memory-last">
                I really, really like being part of your plans.
            </p>
        `
    },


    laugh: {
        title: "when I'm down",
        text: `
            <p>
                I love when you try to make me laugh when I'm having
                a bad day.
            </p>

            <p>
                You don't always need to fix anything.
                Sometimes just knowing you're trying is enough.
            </p>

            <p class="memory-last">
                you make things feel lighter.
            </p>
        `
    },


    cooler: {
        title: "im definitely cooler than you",
        text: `
            <p>
                I put on Brooklyn Baby and said,
                “but he's not as cool as me.”
            </p>

            <p>
                And you immediately put on a song with the same kind of
                energy just to tell me you thought you were cooler.
            </p>

            <p class="memory-last">
                you really couldn't let me have that one 😭
            </p>
        `
    },


    /* =========================
       EASTER EGGS
    ========================= */

    secret: {
        title: "you found the secret ♡",
        text: `
            <p>
                okay hi.
            </p>

            <p>
                If you actually clicked around enough to find this,
                I hope you know that I put little things like this here
                because I knew you'd probably be curious enough to look.
            </p>

            <p class="memory-last">
                I love you, twin.
            </p>
        `
    },


    "hidden-word": {
        title: "you found it.",
        text: `
            <p>
                You clicked a random invisible word.
            </p>

            <p>
                I genuinely have no explanation for this.
                You were just supposed to be nosy.
            </p>

            <p class="memory-last">
                and you were. congratulations 💀
            </p>
        `
    },


    equivalent: {
        title: "equivalent exchange department",
        text: `
            <p>
                Your account has been reviewed.
            </p>

            <p>
                Outstanding balance:
                <strong>18 pictures.</strong>
            </p>

            <p>
                Accepted form of payment:
                pictures.
            </p>

            <p>
                Excuses are unfortunately not accepted at this time.
            </p>

            <p class="memory-last">
                thank you for your cooperation 🫵
            </p>
        `
    },


    "three-click": {
        title: "HELLO???",
        text: `
            <p>
                Why did you click the same tiny dot three times 😭
            </p>

            <p>
                Genuinely what were you expecting to happen.
            </p>

            <p class="memory-last">
                okay fine. happy birthday, idiot ♡
            </p>
        `
    }

};


/* =========================
   MEMORY POPUP
========================= */

function showMemory(memoryName) {

    const memory = memories[memoryName];

    if (!memory) {
        console.log("Memory not found:", memoryName);
        return;
    }

    document.getElementById("memory-title").textContent = memory.title;

    document.getElementById("memory-text").innerHTML = memory.text;

    document.getElementById("memory-popup").classList.add("active");

}


function closeMemory() {

    document.getElementById("memory-popup").classList.remove("active");

}


/* =========================
   THREE-CLICK EASTER EGG
========================= */

let secretClicks = 0;

function threeClickSecret() {

    secretClicks++;

    console.log("Secret clicks:", secretClicks);

    if (secretClicks === 3) {

        showMemory("three-click");

        secretClicks = 0;

    }

}

let letterAttempts = 0;

function tryOpenLetter() {

    letterAttempts++;

    const button = document.getElementById("letter-button");
    const rageText = document.getElementById("letter-rage-text");

    if (letterAttempts === 1) {

        button.textContent = "try again";

        rageText.textContent =
            "you really thought it'd be that easy?";

    } else if (letterAttempts === 2) {

        button.textContent = "okay NOW open it";

        rageText.textContent =
            "unfortunately, that wasn't the correct answer.";

    } else if (letterAttempts === 3) {

        button.textContent = "LET ME READ IT";

        rageText.textContent =
            "you are getting warmer. (you are not getting warmer.)";

    } else {

        document.getElementById("letter-intro").style.display = "none";

        document.getElementById("actual-letter").classList.add("show");
    }
}