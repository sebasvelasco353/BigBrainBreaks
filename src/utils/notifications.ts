export async function requestNotificationPermission(): Promise<boolean> {
  if (!('Notification' in window)) {
    console.error('This browser does not support desktop notifications.');
    return false;
  }

  const permission = await Notification.requestPermission();
  return permission === 'granted';
}

export async function triggerNotification(title: string, body: string) {
  const hasPermission = await requestNotificationPermission();

  if (hasPermission) {
    const notification = new Notification(title, {
      body: body,
      requireInteraction: false
    });
    notification.onclick = () => {
      window.focus();
    };
  }
}
