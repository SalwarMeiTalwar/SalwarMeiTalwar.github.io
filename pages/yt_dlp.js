import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/YTDLP.module.css'

export default function YTDLP() {
    return (
        <div className="container mx-auto px-4 py-8">
            <Head>
                <title>How to install ytdlp</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="text-4xl font-bold mb-4">How to install ytdlp</h1>
                <p className="text-lg mb-4">
                    There are several ways to install ytdlp on Linux, Windows, and Mac.
                    Here are some of the most common methods:
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Linux</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-4">
                            <p className="font-bold">Method 1:</p>
                            <p>Open a terminal and run the following commands:</p>
                            <pre className="bg-gray-100 p-2 rounded-lg">{`sudo apt-get update\nsudo apt-get install youtube-dl`}</pre>
                        </li>
                        <li className="mb-4">
                            <p className="font-bold">Method 2:</p>
                            <p>Download the latest version of ytdlp from the official website:</p>
                            <a className="text-blue-500 hover:underline" href="https://youtube-dl.org/">https://youtube-dl.org/</a>
                            <p>Open a terminal and navigate to the directory where you downloaded the file. Then run the following command:</p>
                            <pre className="bg-gray-100 p-2 rounded-lg">sudo python3 ./youtube-dl</pre>
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Windows</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-4">
                            <p className="font-bold">Method 1:</p>
                            <p>Download the Windows executable file from the official website:</p>
                            <a className="text-blue-500 hover:underline" href="https://youtube-dl.org/">https://youtube-dl.org/</a>
                            <p>Open a Command Prompt window and navigate to the directory where you downloaded the file. Then run the following command:</p>
                            <pre className="bg-gray-100 p-2 rounded-lg">youtube-dl.exe</pre>
                        </li>
                        <li className="mb-4">
                            <p className="font-bold">Method 2:</p>
                            <p>Install ytdlp using the Windows package manager:</p>
                            <p className="italic">Note: The package manager may vary depending on your version of Windows.</p>
                            <p>Open a Command Prompt window and run the following command:</p>
                            <pre className="bg-gray-100 p-2 rounded-lg">choco install youtube-dl</pre>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Mac</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-4">
                            <p className="font-bold">Method 1:</p>
                            <p>Open a terminal and run the following command:</p>
                            <pre className="bg-gray-100 p-2 rounded-lg">brew install youtube-dl</pre>
                        </li>
                        <li className="mb-4">
                            <p className="font-bold">Method 2:</p>
                            <p>Download the latest version of ytdlp from the official website:</p>
                            <a className="text-blue-500 hover:underline" href="https://youtube-dl.org/">https://youtube-dl.org/</a>
                            <p>Open a terminal and navigate to the directory where you downloaded the file. Then run the following command:</p>
                            <pre className="bg-gray-100 p-2 rounded-lg">sudo python3 ./youtube-dl</pre>
                        </li>
                    </ul>
                </section>
            </main>
        </div>

    )
}