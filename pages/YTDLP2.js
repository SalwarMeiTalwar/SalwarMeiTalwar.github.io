import Head from "next/head"
import Link from "next/link"

export default function Home() {
    return (
        <div className="bg-gray-50">
            <Head>
                <title>How to Install youtube-dl on Linux, Windows, and Mac</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-3xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                        How to Install youtube-dl on Linux, Windows, and Mac
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl">
                        Learn how to install youtube-dl, a command-line program to download videos from YouTube and many other sites, on Linux, Windows, and Mac.
                    </p>
                    <p className="text-xs">Note: In all the below methods, you need to have Python installed on your machine before installing yt-dlp.
                    </p>
                </div>
                <div className="mt-10">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            What is yt-dlp?
                        </h2>
                        <p className="mb-4">
                            yt-dlp is an open-source command-line tool that allows users to download videos and audio from various video hosting platforms, such as YouTube, Vimeo, Dailymotion, and many others. It is based on the popular YouTube-dl tool, which is no longer maintained and has been forked by the yt-dlp team to add new features and bug fixes.
                            The primary use of yt-dlp is to download videos and audio from various video hosting platforms. It is a versatile tool that supports a wide range of video and audio formats, including MP4, WebM, 3GP, FLV, and many others. Additionally, yt-dlp also supports various audio formats, including MP3, M4A, AAC, FLAC, and WAV. This makes yt-dlp a powerful tool for downloading and archiving videos and audio from online platforms.
                            One of the primary advantages of using yt-dlp is its flexibility and customization options. The tool supports a wide range of command-line options that allow users to customize the download process according to their needs. For example, users can specify the download quality, format, and resolution of the video or audio, as well as the output directory and file name format. This makes it easy for users to tailor the tool to their specific needs and preferences.
                            Another advantage of using yt-dlp is its support for various platforms and operating systems. The tool is cross-platform and can be used on Windows, macOS, and various Linux distributions. Additionally, yt-dlp also supports multiple languages, including English, Spanish, French, German, and many others, making it accessible to users around the world.
                            In addition to its primary use as a video and audio downloader, yt-dlp also offers several advanced features that can enhance the user experience. For example, the tool can be used to download entire playlists or channels, automatically download subtitles, and even download videos based on search terms. Additionally, yt-dlp also supports various post-processing options, such as converting videos to different formats, merging audio and video streams, and adding metadata to downloaded files.
                            Overall, yt-dlp is a powerful and versatile tool for downloading videos and audio from various online platforms. Its flexibility, customization options, and support for multiple platforms and operating systems make it an ideal choice for users who need to download and archive videos and audio for personal or professional use. Additionally, its advanced features, such as playlist and channel downloading, make it a valuable tool for content creators and marketers who need to download and analyze large volumes of video content.

                        </p>
                    </section>

                </div>

                <div className="mt-10">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Linux</h2>
                        <p className="mb-4">
                            Installing youtube-dl on Linux is very simple. You can use the package manager for your distribution to install it.
                        </p>
                        <p className="text-l font-bold text-gray-900 mb-4">
                            Method 1: Using package manager on Debian/Ubuntu
                        </p>

                        <ol className="list-decimal ml-8 mb-8">
                            <li className="mb-2">
                                <p className="mb-2">
                                    Open a terminal window on your Debian/Ubuntu machine.
                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Run the following command to update the package list:
                                </p>

                                <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                    sudo apt update                                </pre>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Install yt-dlp using the package manager by running:
                                    <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                        sudo apt install yt-dlp
                                    </pre>
                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Wait for the installation to finish.
                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Run yt-dlp by typing `yt-dlp` and hitting Enter.
                                </p>
                            </li>
                        </ol>
                        <p className="text-l font-bold text-gray-900 mb-4">
                            Method 2: Using package manager on Fedora
                        </p>

                        <ol>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Open a terminal window on your Fedora machine.
                                    <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                        sudo apt install yt-dlp
                                    </pre>
                                </p>
                            </li>

                            <li className="mb-2">
                                <p className="mb-2">
                                    Run the following command to update the package list:
                                    <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                        sudo dnf update
                                    </pre>
                                </p>
                            </li>

                            <li className="mb-2">
                                <p className="mb-2">
                                    Install yt-dlp using the package manager by running:
                                    <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                        sudo dnf install yt-dlp
                                    </pre>
                                </p>
                            </li>

                            <li className="mb-2">
                                <p className="mb-2">
                                    Wait for the installation to finish.
                                </p>
                            </li>

                            <li className="mb-2">
                                <p className="mb-2">
                                    Run yt-dlp by typing `yt-dlp` and hitting Enter.
                                </p>
                            </li>
                        </ol>

                        <p className="text-l font-bold text-gray-900 mb-4">
                            Method 3: Using package manager on Arch Linux
                        </p>

                        <ol>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Open a terminal window on your Arch Linux machine.
                                </p>
                            </li>

                            <li className="mb-2">
                                <p className="mb-2">
                                    Run the following command to update the package list:
                                    <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                        sudo pacman -Syu
                                    </pre>
                                </p>
                            </li>

                            <li className="mb-2">
                                <p className="mb-2">
                                    Install yt-dlp using the package manager by running:
                                    <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                        sudo pacman -S yt-dlp
                                    </pre>
                                </p>
                            </li>

                            <li className="mb-2">
                                <p className="mb-2">
                                    Wait for the installation to finish.
                                </p>
                            </li>

                            <li className="mb-2">
                                <p className="mb-2">
                                    Run yt-dlp by typing `yt-dlp` and hitting Enter.
                                </p>
                            </li>
                        </ol>
                        <p className="text-l font-bold text-gray-900 mb-4">
                            Method 4: Using pip
                        </p>

                        <ol>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Open a terminal window on your Linux machine.
                                </p>
                            </li>

                            <li className="mb-2">
                                <p className="mb-2">
                                    Install pip, the Python package installer, by running the following command:
                                    <p className="ml-4">
                                        On Debian/Ubuntu
                                    </p>
                                    <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                        sudo apt install python3-pip
                                    </pre>
                                    <p className="ml-4">
                                        On Fedora
                                    </p>
                                    <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                        sudo dnf install python3-pip
                                    </pre>
                                    <p className="ml-4">
                                        On Arch Linux
                                    </p>
                                    <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                        sudo pacman -S python-pip
                                    </pre>
                                </p>
                            </li>

                            <li className="mb-2">
                                <p className="mb-2">
                                    Upgrade pip to the latest version by running:
                                    <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                        pip3 install --upgrade pip
                                    </pre>
                                </p>
                            </li>

                            <li className="mb-2">
                                <p className="mb-2">
                                    Install yt-dlp by running the following command:
                                    <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                        pip3 install yt-dlp
                                    </pre>
                                </p>
                            </li>

                            <li className="mb-2">
                                <p className="mb-2">
                                    Wait for the installation to finish.
                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Run yt-dlp by typing `yt-dlp` and hitting Enter.
                                </p>
                            </li>
                        </ol>

                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Windows</h2>
                        <p className="mb-4">
                            Installing youtube-dl on Windows is a bit more involved than on Linux, but it's still relatively simple. Here are the steps you need to follow:
                        </p>

                        <p className="mb-4">
                            Note: In all the above methods, you need to have Python installed on your machine before installing yt-dlp.
                        </p>
                        <p className="text-l font-bold text-gray-900 mb-4">
                            Method 1: Using pip
                        </p>
                        <ol className="list-decimal ml-8 mb-8">
                            <li className="mb-2">
                                <p className="mb-2">Open Command Prompt on your Windows machine.
                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Install pip, the Python package installer, by running the following command:
                                </p>

                                <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                    python -m ensurepip --default-pip
                                </pre>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Upgrade pip to the latest version by running:
                                </p>

                                <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                    python -m pip install --upgrade pip
                                </pre>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Install yt-dlp by running the following command:
                                </p>

                                <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                    pip install yt-dlp
                                </pre>
                            </li>
                        </ol>

                        <p className="text-l font-bold text-gray-900 mb-4">
                            Method 2: Using executable file
                        </p>
                        <ol className="list-decimal ml-8 mb-8">
                            <li className="mb-2">
                                <p className="mb-2">
                                    Go to the yt-dlp releases page on GitHub: {" "}
                                    <Link href="https://github.com/yt-dlp/yt-dlp/releases">
                                        https://github.com/yt-dlp/yt-dlp/releases</Link>
                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Download the latest yt-dlp.exe file.
                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Download the latest yt-dlp.exe file.

                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Move the downloaded file to a directory that is in your system's PATH environment variable. This will allow you to run the executable from any directory in Command Prompt.

                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Open Command Prompt and navigate to the directory where you placed the yt-dlp.exe file.

                                </p>
                            </li>

                            <li className="mb-2">
                                <p className="mb-2">
                                    yt-dlp is installed
                                </p>
                            </li>
                        </ol>

                        <p className="text-l font-bold text-gray-900 mb-4">
                            Method 3: Using Chocolatey package manager
                        </p>
                        <ol className="list-decimal ml-8 mb-8">
                            <li className="mb-2">
                                <p className="mb-2">
                                    Install Chocolatey package manager by following the instructions on their website: https://chocolatey.org/install
                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Open Command Prompt as an administrator.
                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Install yt-dlp by running the following command:
                                </p>
                                <pre className="bg-gray-100 p-4 rounded-md mb-8">
                                    choco install yt-dlp
                                </pre>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    Wait for the installation to finish.

                                </p>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                    yt-dlp is installed.
                                </p>
                            </li>
                        </ol>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Using yt-dlp</h2>
                        <p className="mb-4">
                        Here are the general steps to use yt-dlp to download videos or audios from different sources:
                        </p>
                        <ol className="list-decimal ml-8 mb-8">
                            <li className="mb-2">
                                <p className="mb-2">
                                Open a terminal or command prompt window.
                                </p>
                                
                                <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                        pip3 install --upgrade pip
                                    </pre>
                            </li>
                            
                            <li className="mb-2">
                                <p className="mb-2">
                                Enter the command to download a video or audio:
                                </p>
                                <pre className="bg-gray-100 p-4 rounded-md mb-2">
                                - For YouTube: `yt-dlp https://www.youtube.com/watch?v=VIDEO_ID`
                                <br></br>
                                - For Vimeo: `yt-dlp https://vimeo.com/VIDEO_ID`
                                <br></br>
                                - For Dailymotion: `yt-dlp https://www.dailymotion.com/video/VIDEO_ID`           
                                </pre>
                                <p className="mb-2">
                                Replace `VIDEO_ID` with the ID of the video or audio you want to download. You can also add various options to the command to customize the download process, such as specifying the output directory, format, and quality.
                                </p>
                                <p className="mb-2">
                                    For example, to download a YouTube video in 1080p quality and save it to a specific folder, you can use the following command:
                                </p>
                                <pre className="bg-grey-100 p-4 rounded-md mb-2 whitespace-pre-wrap">
                               {"yt-dlp.exe https://www.youtube.com/watch?v=VIDEO_ID -f 'bestvideo[height<=1080]+bestaudio/best[height<=1080]' -o '/path/to/folder/%(title)s.%(ext)s'"}
                                </pre>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                To download a playlist or a channel, use the playlist or channel URL instead of the video URL. yt-dlp will automatically download all the videos in the playlist or channel.
                                </p>
                                <pre className="bg-grey-100 p4 rounded-md mb-2">
                                yt-dlp.exe https://www.youtube.com/playlist?list=PLAYLIST_ID
                                </pre>
                            </li>
                            
                            <li className="mb-2">
                                <p className="mb-2">
                                To download subtitles along with the video, use the `--all-subs` option. This will download all the available subtitles in the preferred format and merge them with the video.
                                </p>
                                <pre className="bg-grey-100 p-4 rounded-md mb-2 whitespace-pre-wrap">
                                yt-dlp.exe https://www.youtube.com/watch?v=VIDEO_ID --all-subs --sub-format srt
                                </pre>
                            </li>
                            <li className="mb-2">
                                <p className="mb-2">
                                To search for videos based on a keyword or a search term, use the `ytsearch:` prefix followed by the search term. yt-dlp will search for videos matching the search term on YouTube and download the first result.                                </p>
                                <pre className="bg-grey-100 p-4 rounded-md mb-2 whitespace-pre-wrap">
                                yt-dlp.exe ytsearch:'python tutorial'
                                </pre>
                            </li>
                        </ol>
                    </section>
                    <section>
                        
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
                        <p className="mb-4">
                        You have successfully learnt how to use yt-dlp to download videos
                        </p>
                    </section>
                </div>
            </main>
        </div>
    )
}

