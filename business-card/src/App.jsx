import githubLogo from '/github-mark.svg'
import tgLogo from '/telegram_logo.svg'
import './App.css'

function App() {
    return (
        <>
            <div>
                <div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>
                <div>
                    <a href="https://github.com/psrtsandr" target="_blank">
                        <img src={githubLogo} className="github-logo" alt="GitHub logo" />
                    </a>
                    <a href="https://t.me/psrtsandr" target="_blank">
                        <img src={tgLogo} className="logo" alt="Telegram logo" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default App
