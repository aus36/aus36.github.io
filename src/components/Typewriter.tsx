import { useState, useEffect } from 'react';
import styles from '../styles/typewriter.module.css';

type TypewriterProps = { // desired types to be inputted into component
    words: string[];
}

const Typewriter = ( props:TypewriterProps ) => {

    const [text, setText] = useState<string>('');
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
        const currentWord = props.words[wordIndex];
        let timer: ReturnType<typeof setTimeout>;
    
        if (text === currentWord) { // Word is complete, set a timeout to start deleting
            setIsDeleting(true);
            timer = setTimeout(() => {
                setText(currentWord.slice(0, -1));
            }, 2000); // Time to wait before deleting
        } else if (!isDeleting && text.length < currentWord.length) { // Word is not complete, keep typing
            timer = setTimeout(() => {
                setText(currentWord.slice(0, text.length + 1));
            }, 150); // Speed of typing
        } else {  // Deleting the word
            if ( text.length > 0) {
                setIsDeleting(true)
                timer = setTimeout(() => {
                    setText(currentWord.slice(0, text.length - 1));
                }, 100); // Speed of deleting
            } else {
                // Move to the next word
                if(wordIndex === props.words.length - 1) {
                    setWordIndex(0);
                    setIsDeleting(false);
                } else {
                    setWordIndex(wordIndex + 1);
                    setIsDeleting(false);
                }
            }
        }
    
        return () => clearTimeout(timer); // clear the timer at the end
    }, [text, props.words]);

    return (
        <div className={styles.typewritertext}>
            {/* Index: {wordIndex} , Word: {props.words[wordIndex]}<br></br> */}
            {text}
        </div>
    );
};

export default Typewriter;
