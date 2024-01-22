import React from 'react';

function Home() {
    return (
        <div className=''>
            Welcome to wordle
            <div className="flex justify-center">
                <div className="grid grid-cols-5 gap-1 w-auto">
                    <div className='border-black border-2 border-solid w-16 h-16'>1</div> <div className='border-black border-2 border-solid w-16 h-16'>2</div> <div className='border-black border-2 border-solid w-16 h-16'>3</div> <div className='border-black border-2 border-solid w-16 h-16'>4</div> <div className='border-black border-2 border-solid w-16 h-16'>5</div>
                    <div className='border-black border-2 border-solid w-16 h-16'>1</div> <div className='border-black border-2 border-solid w-16 h-16'>2</div> <div className='border-black border-2 border-solid w-16 h-16'>3</div> <div className='border-black border-2 border-solid w-16 h-16'>4</div> <div className='border-black border-2 border-solid w-16 h-16'>5</div>
                    <div className='border-black border-2 border-solid w-16 h-16'>1</div> <div className='border-black border-2 border-solid w-16 h-16'>2</div> <div className='border-black border-2 border-solid w-16 h-16'>3</div> <div className='border-black border-2 border-solid w-16 h-16'>4</div> <div className='border-black border-2 border-solid w-16 h-16'>5</div>
                    <div className='border-black border-2 border-solid w-16 h-16'>1</div> <div className='border-black border-2 border-solid w-16 h-16'>2</div> <div className='border-black border-2 border-solid w-16 h-16'>3</div> <div className='border-black border-2 border-solid w-16 h-16'>4</div> <div className='border-black border-2 border-solid w-16 h-16'>5</div>
                    <div className='border-black border-2 border-solid w-16 h-16'>1</div> <div className='border-black border-2 border-solid w-16 h-16'>2</div> <div className='border-black border-2 border-solid w-16 h-16'>3</div> <div className='border-black border-2 border-solid w-16 h-16'>4</div> <div className='border-black border-2 border-solid w-16 h-16'>5</div>
                    <div className='border-black border-2 border-solid w-16 h-16'>1</div> <div className='border-black border-2 border-solid w-16 h-16'>2</div> <div className='border-black border-2 border-solid w-16 h-16'>3</div> <div className='border-black border-2 border-solid w-16 h-16'>4</div> <div className='border-black border-2 border-solid w-16 h-16'>5</div>
                </div>


            </div>
            <div className='flex justify-center'>
                <button>Q</button><button>W</button><button>E</button><button>R</button><button>T</button><button>Y</button>
                <button>U</button><button>I</button><button>O</button><button>P</button>
            </div>
            <div className='flex justify-center'>
                <button>A</button><button>S</button>
                <button>D</button><button>F</button><button>G</button><button>H</button><button>J</button><button>K</button>
                <button>L</button>
            </div>
            <div className='flex justify-center'>
                <button>Z</button><button>X</button><button>C</button><button>V</button><button>B</button>
                <button>N</button><button>M</button>
            </div>
        </div>
    )
}

export default Home;