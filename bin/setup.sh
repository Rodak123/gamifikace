#!/bin/bash

SESSION="gamifikace"

tmux kill-session -t $SESSION 2>/dev/null
tmux new-session -d -s $SESSION -n "dev"

# Create panes
# Backend  | Root
# Frontend | Shared
tmux split-window -h -t $SESSION:0.0
tmux split-window -v -t $SESSION:0.0
tmux split-window -v -t $SESSION:0.2

(
    # Root
    tmux select-pane -t $SESSION:0.2
    tmux send-keys -t $SESSION:0.2 "npm install && tmux wait-for -S root_ready" C-m

    tmux wait-for root_ready

    # Shared
    tmux select-pane -t $SESSION:0.3
    tmux send-keys -t $SESSION:0.3 "cd shared && npm install && npm run dev" C-m

    # Backend
    tmux select-pane -t $SESSION:0.0
    tmux send-keys -t $SESSION:0.0 "cd backend && docker compose up -d && npm install && npm run db:generate && npm run dev" C-m

    # Frontend
    tmux select-pane -t $SESSION:0.1
    tmux send-keys -t $SESSION:0.1 "cd frontend && npm install && npm run dev" C-m

    # Return to root
    tmux select-pane -t $SESSION:0.2
) &

tmux attach-session -t $SESSION