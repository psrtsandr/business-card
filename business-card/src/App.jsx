import githubLogo from '/github-mark.svg'
import tgLogo from '/telegram_logo.svg'
import './App.css'

function App() {
    return (
        <>
            <div>
                <div>
                    <p>Всем привет!</p>
                    <span>Я разработчик настольных и веб-приложений. Мой карьерный путь начался в 2022 году. Начинал с разработки программных модулей для программного комплекса, предназначенного для моделирования систем безопасности. Владею C#, WPF, Entity Framework, ASP.NET, MS SQL Server и другими технологиями.</span>
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
