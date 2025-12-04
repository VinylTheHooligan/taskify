import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

import SVG from '../../images/SVG';

import drag_indicator from '../../../assets/logo/drag_indicator';

export default function TaskCard() {

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'unique-id',
    });
    const style = {
        transform: CSS.Translate.toString(transform),
    };

    return (
        <button ref={setNodeRef} style={style}>
            <button {...listeners} {...attributes}>
                <SVG width={24} height={24} viewBox={drag_indicator.viewBox} path={drag_indicator.path} color="#1B1B1B" />
            </button>
            <div>

            </div>
        </button>
    )
}
