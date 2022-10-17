import React from 'react';
import { format } from 'date-fns';

const BookModal = ({ treatment, date, setTreatment }) => {

    const { _id, name, slots, } = treatment;

    const handlePopup = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3>Dr: {name}</h3>
                    <form onSubmit={handlePopup} className='grid grid-cols-1 gap-3 justify-items-center'>

                        <h2 className='text-xl text-green-600'>please filup to Appointment</h2>

                        {/* date disabled dynamic input   */}
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-accent w-full max-w-xs" />

                        {/* options  */}
                        <select name='slot' className="select select-accent w-full max-w-xs">
                            {
                                slots.map(slot => <option
                                    name='slot'
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' placeholder="Name" className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="submit" className="input  input-accent bg-green-600 text-white" />

                    </form>
                    {/* <div className="modal-action">
                        <label for="book-modal" className="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookModal;