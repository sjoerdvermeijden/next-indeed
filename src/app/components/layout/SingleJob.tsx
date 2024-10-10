import React from 'react'

type Job = {
    id: number,
    title: string,
    company: string,
    description: string,
    short_description: string,
    salary: string,
    postal_code: string,
    placed: string,
    vacancy_language: string,
    contract_type: string
}

function SingleJob({ title }: Job) {
    return (
        <div className='border rounded w-full p-4 sticky h-[831px] top-4 left-0 overflow-scroll'>
            <h3 className='text-xl font-bold'>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit nunc et imperdiet euismod. Cras felis velit, consequat vel posuere at, tincidunt ac tortor. Phasellus enim lectus, sodales sit amet eros et, semper congue nisl. Morbi vel sollicitudin dui. Morbi blandit dictum turpis, non hendrerit dui varius vel. Suspendisse facilisis semper nulla, eu vehicula mi molestie at. Sed sit amet massa congue, facilisis ex id, laoreet nunc. Donec eleifend turpis sit amet orci tincidunt, vel efficitur elit bibendum. Nulla facilisi. Nullam pharetra id orci quis lacinia. In hac habitasse platea dictumst. Etiam commodo vel magna et placerat. Nullam aliquet accumsan massa at interdum. Etiam sit amet rhoncus nunc, non venenatis augue. Praesent sapien justo, euismod at malesuada in, lacinia non augue. Aenean maximus dolor quis auctor imperdiet.

                In sit amet pulvinar ligula, non faucibus risus. Pellentesque volutpat turpis dolor, vitae elementum nibh tempor eget. Nunc nec tristique urna. Proin aliquam ante quis augue laoreet interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eu euismod lacus. Mauris vel odio libero. Aenean consequat sit amet libero eu condimentum. Sed lacinia eu augue eget egestas. Aliquam lectus massa, efficitur elementum mollis eu, volutpat a leo. Phasellus dapibus ornare lorem, vel blandit tellus suscipit nec. Mauris dictum ligula quis elit sollicitudin, ut finibus nulla molestie. Proin vitae enim commodo, commodo massa iaculis, iaculis dui. Nullam sed tortor in ipsum fringilla lacinia. Vestibulum erat risus, ultricies ac rhoncus et, aliquam at ex. Quisque convallis lorem a dolor luctus, sit amet maximus sapien mattis.

                Integer viverra vehicula gravida. Nullam vel turpis libero. Maecenas ornare blandit feugiat. Aliquam ullamcorper hendrerit enim in efficitur. Vivamus eu sem purus. Curabitur porta metus quis pulvinar tempus. Fusce tempus leo nunc, tristique bibendum nisl tempus at. Mauris mi risus, molestie vitae vehicula eget, luctus eget nisl. Donec turpis magna, porta sed ornare in, semper eu purus. Pellentesque eu nibh laoreet, vestibulum augue id, ullamcorper diam. Praesent faucibus tincidunt finibus. Nam sed feugiat diam, at dictum nisi. In nulla lectus, rhoncus sit amet nisi eu, eleifend vestibulum arcu. Suspendisse consequat quis justo quis mattis. Sed quis porta turpis. Morbi sollicitudin, dolor id ultricies tempus, urna massa elementum urna, non rutrum dolor dui vel ipsum.

                In at porttitor erat, vel aliquet diam. Donec ut porta quam, vestibulum consectetur purus. Proin at magna nisi. Morbi at arcu porta, luctus sem et, egestas massa. Maecenas tempor commodo ipsum. Sed at dictum diam, in malesuada mi. Aenean luctus turpis justo, vitae viverra sem dictum eu. Proin vestibulum ultrices sollicitudin. Duis eu ultricies mauris, feugiat eleifend ligula. Aenean fringilla tempus quam eu rhoncus. Nullam auctor sapien eu urna rhoncus ultricies in non lorem. In in mauris ut ipsum efficitur congue vitae vel velit. Duis tempus, sapien non ultricies suscipit, dolor massa eleifend ipsum, vel tincidunt tellus magna ac est.

                Ut ligula ipsum, pretium id enim id, vehicula euismod dolor. Quisque eu turpis diam. Suspendisse mauris nibh, semper ac risus vitae, dictum elementum nibh. Nam nunc lectus, hendrerit ut quam ac, mollis aliquam diam. Morbi sodales tortor quis tellus sollicitudin rhoncus. Ut dignissim velit neque, vitae egestas nunc porttitor ut. Pellentesque tortor magna, pulvinar et ultrices quis, vulputate sed ex. Aenean sit amet posuere nunc, quis ornare arcu. Maecenas vel euismod risus. Donec cursus nibh sed elementum bibendum. Praesent euismod iaculis bibendum. Ut vulputate dolor est, ac lacinia velit commodo at. Integer eget euismod quam. Vivamus ac felis iaculis velit blandit laoreet quis quis est. Quisque ornare leo eu augue viverra ultricies.

                Mauris sed congue justo. Nullam iaculis fermentum ante gravida rutrum. Mauris efficitur malesuada ante, eget laoreet sem faucibus at. Pellentesque finibus massa quis enim dictum, in vehicula neque aliquet. Integer vestibulum varius turpis sit amet egestas. Cras a mollis leo. Pellentesque sed dignissim neque. Sed id congue urna, sed dignissim dui. Vivamus maximus risus eros, nec venenatis lectus sodales non. Praesent erat metus, gravida vel metus sit amet, ultrices vehicula ipsum. Maecenas venenatis, eros a vehicula molestie, velit leo pellentesque leo, vitae interdum justo diam at sapien. Vestibulum scelerisque et dui sed condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque ac nunc turpis.

                Donec nec urna mollis velit facilisis euismod ut non est. Maecenas in eros felis. Donec consectetur lobortis mi quis gravida. Vestibulum interdum ligula mi. Ut a leo a enim dapibus porttitor at sodales sapien. Proin eget nunc viverra diam rhoncus pharetra nec quis ante. Fusce aliquet pharetra dictum. Nam euismod sapien vel ligula finibus, a scelerisque odio bibendum. In sit amet accumsan mi.

                Sed sed nibh eleifend, scelerisque nisi eu, laoreet diam. Morbi et ornare elit. Curabitur in feugiat arcu. Mauris auctor a metus sed finibus. Maecenas faucibus urna justo, sed lobortis turpis faucibus vulputate. Duis ac bibendum nibh, a maximus lectus. In hac habitasse platea dictumst. Suspendisse porta blandit mi, vitae consequat sem pulvinar vel. Phasellus nec arcu ut erat posuere rutrum eget vel mauris. Nulla tempor sapien nec libero fermentum, et aliquam augue tincidunt.

                Vivamus ut odio sed mauris pretium dapibus. Proin imperdiet ante ut urna auctor consectetur. Morbi auctor varius consectetur. Donec pulvinar congue ipsum, non posuere ante sagittis vitae. Sed suscipit, mauris id facilisis aliquam, nulla tortor pulvinar turpis, non gravida mauris augue in nisl. Mauris purus odio, pellentesque eu sem ut, venenatis gravida nibh. Pellentesque varius ex justo, ac dignissim libero consectetur at. In erat sem, bibendum et ornare in, lobortis at eros. Nulla scelerisque lectus eget tellus imperdiet pharetra. Aenean id turpis leo. Maecenas nec lobortis neque, dignissim hendrerit tellus. Nam id pharetra ipsum.</p>
        </div>
    )
}

export default SingleJob