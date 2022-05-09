// function to toggle extension on and off
$('document').ready(() => {
    let isOn = true;
    const appId = 'ieoibhaamjkhijlemajemlggghdbgond';
    $('#extensionOnToggle').click(() => {
        if (isOn) {
            isOn = false;
            $('#extensionOnToggle').html('Off');
        } else {
            isOn = true;
            $('#extensionOnToggle').html('On');
        }
    })
})
