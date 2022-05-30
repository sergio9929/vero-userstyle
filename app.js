"use strict";

const midviewContentString = `<div class="post-container movie" id="K-n69fsthxKQ9RxpSXKMXt1H" onscroll="vero.onScroll();" style="max-height: 568.047px;"> <a class="post-btn close-btn" onclick="vero.closeMidview();"> <img alt="close icon" src="images/close-icon.svg"> </a> <div class="post-visual-content desktop movie" style="max-height: 568.047px;"> <div class="content-wrapper portrait" style="width: 400px; height: 568.047px; max-height: 568.047px;"> <div class="content-background" style="width: 400px; height: unset; max-height: 568.047px; min-height: 568.047px; opacity: 0.4;"><canvas width="105" height="150" style="width: 0px; height: 0px; left: 0px; top: 0px;"></canvas></div> <div class="mid-dialog-spinner post-img"> <img alt="Spinner" class="img-spinner" src="images/spinner.svg"> <img alt="Play" class="img-play" src="images/play.svg"> </div> <img alt="image" class="post-content image" src="content/e8e72f53-f7ce-49af-9e71-a5f3827ebc5f_c623x623.jpg" srcset="content/e8e72f53-f7ce-49af-9e71-a5f3827ebc5f_c623x623.jpg 1x, content/e8e72f53-f7ce-49af-9e71-a5f3827ebc5f_c1246x1246.jpg 2x" data-height="720" data-width="507" style="height: unset; min-height: 460px;"> </div> </div> <div class="post-infos"> <div class="post-infos-container"> <div class="post-main"> <div class="post-header"> <div class="user-avatar"> <a href="https://vero.co/sergio9929" target="_parent"> <img onerror="this.onerror=null;this.srcset='images/avatar-default.png 1x';this.src='images/avatar-default.png';" alt="User avatar" src="content/cccdb0cc-92a5-4413-8592-b4e69749a922_96x96.jpg" srcset="content/cccdb0cc-92a5-4413-8592-b4e69749a922_96x96.jpg 1x, content/cccdb0cc-92a5-4413-8592-b4e69749a922_96x96.jpg 2x"> </a> </div> <div class="username"> <a href="https://vero.co/sergio9929" target="_parent"> <h3> <span class="label">Sergio Rodríguez </span> </h3> </a> <div class="post-cat movie"> <p> <span>movie - </span><span class="display-time" data-time="1653607296912">27 May</span></p> </div> </div> </div> <div class="post-infos-content movie"> <h5 class="action"> <span class="action-rating rate-5" style="background-image: url('images/recommend.svg')"></span> <span class="action">Recommends</span> </h5> <h5>The Summit of the Gods</h5> <div class="bubble"> <div class="caption post-movie"><pre>Peliculón. Me ha emocionado un poco al final.</pre></div> </div> </div> <div class="post-footer"> <div class="comments" onclick="vero.toggleComments();"> <p class="format-number">0</p> </div> <div class="likes"> <p class="format-number">0</p> </div> <a> <div class="options" onclick="optionsModals.openOptions();"> </div> </a> </div> </div> <div class="post-comments"> <div class="comments-header" onclick="vero.toggleComments()">Comments</div> <div class="comments-content " onclick="return true;"> <div class="empty-data"> <div class="message comments">NO COMMENTS</div> </div> </div> </div> </div> </div> <div class="mobile-container mobile-comments"> <div class="post-comments"> <div class="comments-header" onclick="vero.toggleComments()">Comments</div> <div class="comments-content " onclick="return true;"> <div class="empty-data"> <div class="message comments">NO COMMENTS</div> </div> </div> </div> </div> <div class="mobile-container mobile-likes"> </div> <div class="mobile-container mobile-content has-caption movie"> <div class="mobile-container mobile-header movie"> <div class="post-header"> <div class="user-avatar"> <a href="https://vero.co/sergio9929" target="_parent"> <img onerror="this.onerror=null;this.srcset='images/avatar-default.png 1x';this.src='images/avatar-default.png';" alt="User avatar" src="content/cccdb0cc-92a5-4413-8592-b4e69749a922_96x96.jpg" srcset="content/cccdb0cc-92a5-4413-8592-b4e69749a922_96x96.jpg 1x, content/cccdb0cc-92a5-4413-8592-b4e69749a922_96x96.jpg 2x"> </a> </div> <div class="username"> <a href="https://vero.co/sergio9929" target="_parent"> <h3> <span class="label">Sergio Rodríguez </span> </h3> </a> <div class="post-cat movie"> <p> <span>movie - </span><span class="display-time" data-time="1653607296912">27 May</span></p> </div> </div> </div> </div> <div class="motion-visual-content-mobile movie"> <div class="motion-image-wrapper-mobile portrait" data-img-url="content/e8e72f53-f7ce-49af-9e71-a5f3827ebc5f"> </div> </div> <div class="post-infos-content movie"> <h5 class="action"> <span class="action-rating rate-5" style="background-image: url('images/recommend.svg')"></span> <span class="action">Recommends</span> </h5> <h5>The Summit of the Gods</h5> <div class="bubble"> <div class="caption post-movie"><pre>Peliculón. Me ha emocionado un poco al final.</pre></div> </div> </div> <div class="mobile-motion-post-details movie"> <div class="post-details-group post-infos-list mobile"> <div class="infos-list-wrapper"> <ul class="infos-list"> </ul></div> </div> <div class="post-details-group post-overview mobile"> <div class="title">Synopsis</div> <div class="overview"></div> </div> <div class="post-details-group post-casting-list mobile"> <div class="title">Casting</div> <div class="casting-list-wrapper"> <ul class="casting-list"></ul> </div> </div> </div> </div> </div> <div class="mobile-container mobile-footer"> <div class="gradient movie"></div> <div class="post-footer"> <div class="comments" onclick="vero.toggleComments();"> <p class="format-number">0</p> </div> <div class="likes"> <p class="format-number">0</p> </div> <a> <div class="options" onclick="optionsModals.openOptions();"> </div> </a> </div>`;
const midviewContent = document.createElement('div');
midviewContent.className = 'midview-post';
midviewContent.id = 'midview-post-0';
midviewContent.style = 'margin-top: 0px; top: unset; transform: unset; opacity: 1;';
midviewContent.innerHTML = midviewContentString;

const vero = {
    openMidview: (id) => {

        document.querySelector('.midview-dialog').appendChild(midviewContent);
        setTimeout(() => {
            document.body.classList.add('midview-opened');
            document.body.style.width = 'calc(100% - 0px)';
            document.querySelector('header').style.opacity = 0;
            document.querySelector('.profile').style.opacity = '0.1';
            document.querySelector('.midview-bg').classList.replace('hidden', 'enabled');
            document.querySelector('.mid-btn.next-btn').classList.remove('disabled');
        }, 100);
    },
    closeMidview: ({ target, currentTarget }) => {
        if (target === currentTarget) {
            document.body.classList.remove('midview-opened');
            document.body.style.width = 'unset';
            document.querySelector('header').style.opacity = '';
            document.querySelector('.profile').style.opacity = '';
            document.querySelector('.midview-bg').classList.replace('enabled', 'hidden');
            document.querySelector('.mid-btn.next-btn').classList.add('disabled');
        }
    }
};
document.querySelector('.midview-bg').addEventListener('click', vero.closeMidview);



const optionsModals = {
    openOptionsFromProfile: () => {
        document.body.classList.add('modal-opened', 'modal-options-menu', 'modal-options-profile');
        document.querySelector('.modal-bg').classList.remove('hidden');
    },
    closeOptionsFromProfile: ({ target, currentTarget }) => {
        if (target === currentTarget) {
            document.body.classList.remove('modal-opened', 'modal-options-menu', 'modal-options-profile');
            document.querySelector('.modal-bg').classList.add('hidden');
        }
    },
    openOptions: () => {
        document.body.classList.add('modal-opened', 'modal-options-menu', 'modal-options-menu');
        document.querySelector('.modal-bg').classList.remove('hidden');
    },
    closeOptions: ({ target, currentTarget }) => {
        if (target === currentTarget) {
            document.body.classList.remove('modal-opened', 'modal-options-menu', 'modal-options-menu');
            document.querySelector('.modal-bg').classList.add('hidden');
        }
    }
};
document.querySelector('.modal-bg').addEventListener('click', optionsModals.closeOptionsFromProfile);
document.querySelector('.modal-bg').addEventListener('click', optionsModals.closeOptions);



const gridFilter = document.querySelectorAll('.grid-filter');
const gridFilterSelect = ({ currentTarget }) => {
    gridFilter.forEach(element => {
        element.classList.remove('selected');
        element.querySelector('.filter-underline').style.background = 'none'
    });
    currentTarget.classList.add('selected');
    currentTarget.querySelector('.filter-underline').style.background = 'linear-gradient(to right, rgb(0, 204, 204) 0%, rgb(0, 204, 204) 100%)'
}
gridFilter.forEach(filter => {
    filter.addEventListener('click', gridFilterSelect);
});



document.querySelector('.comparison .before').addEventListener('click', () => {
    document.documentElement.classList.remove('sergio');
})

document.querySelector('.comparison .after').addEventListener('click', () => {
    document.documentElement.classList.add('sergio');
})