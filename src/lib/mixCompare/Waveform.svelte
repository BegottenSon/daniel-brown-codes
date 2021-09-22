<script>
    import { afterUpdate } from 'svelte';
    import { drawAudio } from "./drawaudio";
    // afterUpdate(()=> {
    //     let wavesurfer = WaveSurfer.create({
    //     container: '#waveform',
    //     waveColor: 'violet',
    //     progressColor: 'purple'
    // });
    // wavesurfer.load('/under-pressure.wav');
    drawAudio('/under-pressure.wav')

</script>
<div id="waveform"></div>