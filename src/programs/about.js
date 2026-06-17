import { createWindow } from '../modules/windowFactory.js';

export function renderAbout() {
    const menuHTML = `
        <div class="menu-item">File</div>
        <div class="menu-item">Edit</div>
        <div class="menu-item">Search</div>
        <div class="menu-item">Help</div>
    `;

    const bodyHTML = `
    <div class="md-content">
            <h1>About Me</h1>
            
            <h3>Who am I?</h3>
            <br>
            <p>Hello, my name is purge, I am a web pentester passionate about <i>Networking</i> and nostalgic Irc.</p>

            <hr>

            <h3>What are my skills?</h3>
            <br>
            <ul>
                <li><b>Extras:</b> Network Security</li>
                <li><b>Backend Development:</b> Java, Python</li>
                <li><b>Favorite anime:</b> One piece</li>
            </ul>

            <hr>

            <h3>My Contacts</h3>
            <br>
            <ul>
                <li>
                    <a href="https://t.me/totallyrad">Telegram</a>
                </li>
                <li>
                    <a href="https://github.com/submissively" target="_blank">GitHub</a>
                </li>
            </ul>
            
            <br>
            <p style="text-align: center; color: #888; font-size: 12px;">
                <i>Made with passion | Purge</i>
            </p>
        </div>
    `;

    createWindow({
        id: 'window-about',
        title: 'About Me',
        menuBar: menuHTML,
        content: bodyHTML,
        isCentered: false
    });
}
