import React, { Component } from 'react';
import { PeopleList, MessagesList } from 'containers';

export default class ChatComponent extends Component {
	render() {
		return (
			<div class="container clearfix">
				<PeopleList />
				<MessagesList />
			</div>
		);
	}
}
