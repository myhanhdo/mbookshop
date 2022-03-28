import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react'

const QuoteGenerator = ({ genre }) => {

    const quotes = {
        thriller: [
            { quote: '“I do not love men: I love what devours them.”', by: '― André Gide, Prometheus Illbound' },
            { quote: '“Blood is really warm, it’s like drinking hot chocolate but with more screaming.”', by: '―  Ryan Mecum, Zombie Haiku: Good Poetry for Your...Brains' },
            { quote: '“Demons are like obedient dogs; they come when they are called.”', by: '― Remy de Gourmont' }
        ],
        romance: [
            { quote: '“I’ve never had a moment’s doubt. I love you. I believe in you completely. You are my dearest one. My reason for life.”', by: '― Atonement by Ian McEwan' },
            { quote: '“Her love was entire as a child’s, and though warm as summer it was fresh as spring.”', by: '― Far From The Madding Crowd by Thomas Hardy' },
            { quote: '“Love seeketh not itself to please, Nor for itself hath any care; But for another gives its ease, And builds a Heaven in Hell’s despair.”', by: '― The Clod And The Pebble by William Blake' }
        ],
        youngadult: [
            { quote: "“If you have two friends in your lifetime, you’re lucky. If you have one good friend, you’re more than lucky.”", by: '― That Was Then, This Is Now by S.E. Hinton' },
            { quote: "“I think that maybe forgiveness is like change—it comes in small steps.”", by: '― The Adoration of Jenna Fox by Mary E. Pearson' },
            { quote: "“We who have means and a voice must use them to help those who have neither.”", by: '― These Shallow Graves by Jennifer Donnelly' }
        ],
        sciencefiction: [
            { quote: "“Each day means a new twenty-four hours. Each day means everything's possible again. You live in the moment, you die in the moment, you take it all one day at a time.”", by: '― Legend by Marie Lu' },
            { quote: "“It is good to have an end to journey toward; but it is the journey that matters, in the end.”", by: '― The Left Hand of Darkness by Ursula K. Le Guin' },
            { quote: "“Isn't it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it, too?”", by: "― The Hitchhiker's Guide to the Galaxy by Douglas Adams" }
        ],
        fantasy: [
            { quote: "“One day, you will be old enough to start reading fairytales again.”", by: '― The Chronicles of Narnia by C.S. Lewis' },
            { quote: "“Every time you take one path, you must live with the memory of the other: of a life left unchosen.”", by: '― The Girl in the Tower by Katherine Arden' },
            { quote: "“Does it make you brave to stick your hand in a bear's mouth? Would you do it again just because you didn't die?”", by: '― The Dragon Reborn by Robert Jordan' }
        ],
        poetry: [
            { quote: "“In the end, the poem is not a thing we see; it is, rather, a light by which we may see—and what we see is life.”", by: ' — Robert Penn Warren' },
            { quote: "“Poets are soldiers that liberate words from the steadfast possession of definition.”", by: "— Eli Khamarov" },
            { quote: "“The courage of the poet is to keep ajar the door that leads into madness.”", by: '— Christopher Morley' },
        ],
        biography: [
            { quote: "“Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show.”", by: "― David Copperfield by Charles Dickens" },
            { quote: "“Always live your life with your biography in mind.”", by: "― Special Topics in Calamity Physics by Marisha Pessl" },
            { quote: "“So long as governments set the example of killing their enemies, private individuals will occasionally kill theirs.”", by: "― Elbert Hubbard's Scrap Book by Elbert Hubbard" }
        ],
        selfhelp: [
            { quote: "“Stop caring about what other people think of you, how they perceive you, or if they approve of you. Start to focus on your inner peace.”", by: "― Live Self-Sufficiently: The 12 Step Living Guide by Tisha Marie Payton" },
            { quote: "“Just because someone doesn't like what you do doesn't mean no one else will. A person's opinion is not The Truth, it's their truth.”", by: "― Everything is Figureoutable by Marie Forleo" },
            { quote: "“I don,t just want success for my self ,I want my success to benefit others.”", by: "― How to start your first business by Osman Gulum" }
        ]
    }

    const QuoteRef = useRef();

    const [currentQuote, setCurrentQuote] = useState(quotes[genre][0]);

    useEffect(() => {
        let isMounted = true;
        let count = 0;
        const interval = setInterval(() => {
            if (count < 2) {
                QuoteRef.current.style.opacity = '0'
                count++;
                setTimeout(() => {
                    setCurrentQuote(quotes[genre][count]);
                    if (isMounted) {
                        QuoteRef.current.style.opacity = '1'
                    }
                }, 1000);
            } else {
                QuoteRef.current.style.opacity = '0'
                count = 0;
                setTimeout(() => {
                    setCurrentQuote(quotes[genre][count]);
                    if (isMounted) {
                        QuoteRef.current.style.opacity = '1'
                    }
                }, 1000);
            }

            return (() => {
                isMounted = false;
                clearInterval(interval);
            })
        }, 7000);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [genre])
    return (
        <QuotesContainer ref={QuoteRef}>
            <h1>{currentQuote.quote}</h1>
            <p>{currentQuote.by}</p>
        </QuotesContainer>
    )
}

export default QuoteGenerator;

const QuotesContainer = styled.div`
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    align-items: center;
    width: 100%;
    color: #ffffff;
    transition: all .5s ease-out;
    @media (max-width: 450px){
            margin-top: -20px;
        };
    & h1{
        font-style: italic;
        font-weight: 500;
        padding: 0 200px;
        margin: 0 auto;
        @media (max-width: 1290px){
            padding: 0 150px;
        };
        @media (max-width: 1000px){
            padding: 0 100px;
        };
        @media (max-width: 850px){
            padding: 0px 40px;
            font-size: 22px;
        };
    };
    & p{
        width: 80%;
        margin: 30px auto;
        text-align: right;
        @media (max-width: 850px){
            font-size: 15px;
            width: 75%;
        };
    }
`;
