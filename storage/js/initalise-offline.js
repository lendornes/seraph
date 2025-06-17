if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/storage/js/offline-worker.js')
            .then(function (registration) {
                console.log('✅ Service Worker registered! Scope:', registration.scope);

                navigator.serviceWorker.addEventListener('message', function (event) {
                    if (event.data === 'cached') {
                        const cacheNotice = document.getElementById('cache-status');
                        if (cacheNotice) {
                            cacheNotice.style.display = 'block';
                        } else {
                            console.warn('⚠️ Could not find #cache-status element to update.');
                        }
                    }
                });
            })
            .catch(function (error) {
                console.error('❌ Error registering service worker:', error);
            });
    });
}
