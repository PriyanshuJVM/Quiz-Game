import React, { useContext } from "react";
import { QuizContext } from '../Helper/contexts';

export default function Home() {
    const { setGameState } = useContext(QuizContext);

    // Style Objects
    const styles = {
        wrapper: {
            backgroundColor: "#000000",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Inter', sans-serif",
            padding: "20px",
            boxSizing: "border-box",
            border: "15px solid #ffffff", // Editorial frame
            overflow: "hidden"
        },
        container: {
            textAlign: "center",
            maxWidth: "600px",
            padding: "60px 40px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backgroundColor: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(10px)",
        },
        title: {
            color: "#ffffff",
            fontSize: "clamp(2rem, 8vw, 4rem)",
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: "-2px",
            lineHeight: "0.9",
            marginBottom: "40px",
        },
        subtitle: {
            color: "#888",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "4px",
            marginBottom: "10px",
            display: "block"
        },
        button: {
            backgroundColor: "#ffffff",
            color: "#000000",
            border: "none",
            padding: "18px 45px",
            fontSize: "13px",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: "3px",
            cursor: "pointer",
            marginTop: "20px",
            transition: "all 0.3s ease",
            boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
        },
        footerText: {
            position: "absolute",
            bottom: "40px",
            color: "#444",
            fontSize: "10px",
            letterSpacing: "2px",
            textTransform: "uppercase"
        }
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <span style={styles.subtitle}>Status: Ready</span>
                <h1 style={styles.title}>
                    Ultimate<br />
                    <span style={{ color: "#000", WebkitTextStroke: "1px #fff" }}>Quiz</span>
                </h1>
                
                <button 
                    style={styles.button} 
                    onClick={() => setGameState("Quiz")}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#000";
                        e.target.style.color = "#fff";
                        e.target.style.outline = "1px solid #fff";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#fff";
                        e.target.style.color = "#000";
                        e.target.style.outline = "none";
                    }}
                >
                    Start Quiz
                </button>
            </div>
            
            <div style={styles.footerText}>
                © 2025 System Architecture // Protocol 01
            </div>
        </div>
    );
}
