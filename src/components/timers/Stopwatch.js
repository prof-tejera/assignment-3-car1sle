import { useContext, useEffect } from 'react';
import { AppContext } from '../../AppProvider';
import { translateFromSeconds } from '../../utils/helpers';
import Counter from '../generic/Counter';

const Stopwatch = ({ props }) => {

    const { index, workoutRoundDur, progress, status } = props;
    const { timers, removeTimer, setIsComplete } = useContext(AppContext);

    // I tried moving this to hooks.js to dry it up, but gave an error
    useEffect(() => {
        if (index + 1 === timers.length && status === 'Complete') {
          setIsComplete(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status])

    let progressVal;

    if (status === 'Current') {
        progressVal = translateFromSeconds(progress);
    } else {
        progressVal = status;
    }

    return (
        <Counter label="Workout time" duration={translateFromSeconds(workoutRoundDur)} progress={progressVal} removeClick={() => removeTimer(index)} />
    );

};

export default Stopwatch;