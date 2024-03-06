import man from '../assets/man.png';
import boy from '../assets/boy.png';
import woman from '../assets/woman.png';

function Team() {
    return (
        <div className="bg-gray-50 p-4">
            <p className="text-2xl font-bold">Team</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fuga officia odio dolores, dolore eum ipsam optio vitae unde, magnam modi minima quos voluptas cum expedita at quo labore atque!</p>
            <div className="box-content lg:w-3/4 md:w-full h-auto bg-blue-200 rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-2 mb-4">
                <div className="flex flex-col items-center lg:items-start">
                    <img src={man} alt="" className="rounded-3xl h-32 w-32 lg:h-48 lg:w-48" />
                    <p className="font-bold mt-2 text-lg lg:text-xl">John Smith</p>
                    <p className="text-sm lg:text-base">Designation Here</p>
                </div>
                <p className="w-full lg:w-2/3 text-lg lg:text-xl mt-4 lg:mt-0"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia porro libero error aspernatur, saepe recusandae neque corporis eligendi nobis nam tempora cumque tempore magni atque quis facilis? Debitis, recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium nulla eius error consectetur illo, provident placeat voluptatem autem nobis ducimus cum ut tempore eos earum fugit aut suscipit labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, culpa? 
                </p>
            </div>
            <div className="box-content lg:w-3/4 md:w-full h-auto bg-blue-200 rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-2 mb-4">
                <div className="flex flex-col items-center lg:items-start">
                    <img src={woman} alt="" className="rounded-3xl h-32 w-32 lg:h-48 lg:w-48" />
                    <p className="font-bold mt-2 text-lg lg:text-xl">Elina Willams</p>
                    <p className="text-sm lg:text-base">Designation Here</p>
                </div>
                <p className="w-full lg:w-2/3 text-lg lg:text-xl mt-4 lg:mt-0"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia porro libero error aspernatur, saepe recusandae neque corporis eligendi nobis nam tempora cumque tempore magni atque quis facilis? Debitis, recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium nulla eius error consectetur illo, provident placeat voluptatem autem nobis ducimus cum ut tempore eos earum fugit aut suscipit labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, culpa? 
                </p>
            </div>
            <div className="box-content lg:w-3/4 md:w-full h-auto bg-blue-200 rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-2 mb-4">
                <div className="flex flex-col items-center lg:items-start">
                    <img src={boy} alt="" className="rounded-3xl h-32 w-32 lg:h-48 lg:w-48" />
                    <p className="font-bold mt-2 text-lg lg:text-xl">John Smith</p>
                    <p className="text-sm lg:text-base">Designation Here</p>
                </div>
                <p className="w-full lg:w-2/3 text-lg lg:text-xl mt-4 lg:mt-0"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia porro libero error aspernatur, saepe recusandae neque corporis eligendi nobis nam tempora cumque tempore magni atque quis facilis? Debitis, recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium nulla eius error consectetur illo, provident placeat voluptatem autem nobis ducimus cum ut tempore eos earum fugit aut suscipit labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, culpa? 
                </p>
            </div>
        </div>
    );
}

export default Team;
