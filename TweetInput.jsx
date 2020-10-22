function TweetInput(props) {
  const textareaRef = React.useRef(null);

  const sendTweet = React.useCallback(() => {
    if(textareaRef.current) {
      props.addTweet({
        id: new Date().getTime(),
        icon: '☠️',
        displayName: 'メメント森三中',
        accocuntName: 'memento mori 3 jhs',
        content: textareaRef.current.value
      });
    }
  }, [textareaRef.current, props.addTweet]);

  return (
    <div>
      <div><textarea className="tweet-textarea" ref={textareaRef}></textarea></div>
      <div><button onClick={sendTweet} className="send-tweet">Tweet</button></div>
    </div>
  );
}
