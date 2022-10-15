import React from 'react';
import { format } from 'date-fns';

const BookModal = ({treatment, date}) => {
    const {name, slots} = treatment;

    return (
        <div>
            <input type="checkbox" id="book-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <label for="book-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3>Dr: {name}</h3>
                    <form className='grid grid-cols-1 gap-3 justify-items-center'>

                        <h2 className='text-xl text-green-600'>please filup to Appointment</h2>

                        <input type="text" placeholder="Type your name" class="input input-bordered input-accent w-full max-w-xs" />

                        <input type="email" placeholder="Type Email" class="input input-bordered input-accent w-full max-w-xs" />

                        <input type="text" value={format(date, 'PP')}  class="input input-bordered input-accent w-full max-w-xs" />

                        <input type="text" placeholder="time" class="input input-bordered input-accent w-full max-w-xs" />

                        <input type="submit" placeholder="time" class="input  input-accent bg-green-600 text-white" />

                    </form>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookModal;